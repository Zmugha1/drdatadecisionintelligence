import { Component, useCallback, useEffect, useState } from 'react';
import { generateEmail } from '../lib/emailAlgorithm.js';
import { fetchHistory, fetchToday } from '../lib/sheetsApi.js';
import { CHAPTER_NAME } from '../lib/constants.js';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 32, fontFamily: 'sans-serif', color: '#2D4459' }}>
          <h2>Something went wrong.</h2>
          <pre style={{ color: '#F05F57', fontSize: 12, marginTop: 16 }}>
            {this.state.error.message}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function MemberCard({ member, onRemove }) {
  const hasPitch = member.pitch && String(member.pitch).trim();
  const hasEvent = member.event && String(member.event).trim();
  const hasLink = member.event_link && String(member.event_link).trim();
  const hasAnnouncement = member.announcement && String(member.announcement).trim();

  return (
    <div style={{
      background: '#FFFFFF',
      border: '1px solid #C8E8E5',
      borderRadius: 12,
      padding: '16px 18px',
      marginBottom: 12,
      boxShadow: '0 1px 4px rgba(45,68,89,0.06)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
      }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#2D4459' }}>
            {member.member_name}
          </div>
          {member.company && (
            <div style={{ fontSize: 12, color: '#7A8F95', marginTop: 2 }}>
              {String(member.company)}
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={onRemove}
          style={{
            background: 'none', border: 'none',
            color: '#7A8F95', cursor: 'pointer',
            fontSize: 18, padding: '0 4px',
          }}
          title="Remove from recap"
        >
          x
        </button>
      </div>

      {hasPitch && (
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#3BBFBF',
            textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>
            Pitch
          </div>
          <div style={{ fontSize: 13, color: '#2D4459', lineHeight: 1.5 }}>
            {String(member.pitch)}
          </div>
        </div>
      )}

      {hasEvent && (
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#F05F57',
            textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>
            Event
          </div>
          <div style={{ fontSize: 13, color: '#2D4459', lineHeight: 1.5 }}>
            {String(member.event)}
          </div>
          {hasLink && (
            <a
              href={String(member.event_link)}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: 12, color: '#3BBFBF', display: 'block', marginTop: 3 }}
            >
              {String(member.event_link)}
            </a>
          )}
        </div>
      )}

      {hasAnnouncement && (
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#C8613F',
            textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>
            Announcement
          </div>
          <div style={{ fontSize: 13, color: '#2D4459', lineHeight: 1.5 }}>
            {String(member.announcement)}
          </div>
        </div>
      )}
    </div>
  );
}

function HostDashboard() {
  const [members, setMembers] = useState([]);
  const [removed, setRemoved] = useState(() => new Set());
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [copied, setCopied] = useState(false);

  const poll = useCallback(async () => {
    const today = await fetchToday();
    setMembers(Array.isArray(today) ? today : []);
    setLoading(false);
  }, []);

  useEffect(() => {
    poll();
    const id = setInterval(poll, 5000);
    return () => clearInterval(id);
  }, [poll]);

  const visible = members.filter((m) => {
    const key = String(m.member_name || '') + String(m.timestamp || '');
    return !removed.has(key);
  });

  const removeAt = (index) => {
    const m = visible[index];
    const key = String(m.member_name || '') + String(m.timestamp || '');
    setRemoved((prev) => new Set([...prev, key]));
  };

  const generateRecap = async () => {
    setGenerating(true);
    setEmailSubject('');
    setEmailBody('');
    setCopied(false);
    const hist = await fetchHistory(12);
    const { subject, body } = generateEmail({
      todaySubmissions: visible,
      historicalSubmissions: hist,
    });
    setEmailSubject(subject);
    setEmailBody(body);
    setGenerating(false);
  };

  const copyEmail = () => {
    const full = `Subject: ${emailSubject}\n\n${emailBody}`;
    navigator.clipboard.writeText(full).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
  });

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FEFAF5',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    }}>
      <div style={{
        background: '#2D4459',
        padding: '16px 20px',
        borderBottom: '3px solid #3BBFBF',
      }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF' }}>
          {CHAPTER_NAME}
        </div>
        <div style={{ fontSize: 13, color: '#C8E8E5', marginTop: 2 }}>
          {dateStr}
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, marginTop: 8,
        }}>
          <span style={{
            width: 10, height: 10, borderRadius: '50%',
            background: '#3BBFBF', display: 'inline-block',
          }} />
          <span style={{ fontSize: 12, color: '#C8E8E5', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Live
          </span>
          <span style={{ fontSize: 13, color: '#FFFFFF' }}>
            {visible.length} member{visible.length === 1 ? '' : 's'} submitted today
          </span>
        </div>
      </div>

      <div style={{ padding: '20px 16px', maxWidth: 700, margin: '0 auto' }}>

        {loading && visible.length === 0 && (
          <p style={{ color: '#7A8F95', fontSize: 14 }}>Loading...</p>
        )}

        {!loading && visible.length === 0 && (
          <div style={{
            background: '#FFFFFF', border: '1px dashed #C8E8E5',
            borderRadius: 12, padding: '32px 20px',
            textAlign: 'center', color: '#7A8F95', fontSize: 14,
          }}>
            No submissions yet. Share the link with your chapter members.
          </div>
        )}

        {visible.map((member, i) => (
          <MemberCard
            key={String(member.member_name) + String(member.timestamp) + i}
            member={member}
            onRemove={() => removeAt(i)}
          />
        ))}

        <div style={{ marginTop: 24 }}>
          <button
            type="button"
            onClick={generateRecap}
            disabled={generating || visible.length === 0}
            style={{
              width: '100%',
              padding: '15px',
              background: generating || visible.length === 0 ? '#7A8F95' : '#2D4459',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 600,
              cursor: generating || visible.length === 0 ? 'not-allowed' : 'pointer',
              marginBottom: 16,
            }}
          >
            {generating ? 'Building recap...' : 'Generate This Week\'s Recap Email'}
          </button>

          {(emailSubject || emailBody) && (
            <div style={{
              background: '#FFFFFF',
              border: '1px solid #C8E8E5',
              borderRadius: 12,
              padding: '18px 20px',
              boxShadow: '0 1px 4px rgba(45,68,89,0.06)',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 12,
              }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#3BBFBF',
                  textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Email Preview
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  style={{
                    background: copied ? '#3BBFBF' : '#2D4459',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: 8,
                    padding: '8px 16px',
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {copied ? 'Copied!' : 'Copy Email'}
                </button>
              </div>
              <div style={{ fontSize: 13, fontWeight: 600,
                color: '#2D4459', marginBottom: 10 }}>
                Subject: {emailSubject}
              </div>
              <pre style={{
                fontSize: 12,
                color: '#2D4459',
                lineHeight: 1.7,
                whiteSpace: 'pre-wrap',
                fontFamily: 'inherit',
                margin: 0,
              }}
              >
                {emailBody}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function HostDashboardWithBoundary() {
  return (
    <ErrorBoundary>
      <HostDashboard />
    </ErrorBoundary>
  );
}
