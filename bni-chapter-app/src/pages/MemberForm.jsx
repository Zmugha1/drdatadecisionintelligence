import { useState } from 'react';
import { submitContribution } from '../lib/sheetsApi.js';
import { CHAPTER_NAME } from '../lib/constants.js';

const INPUT_STYLE = {
  width: '100%',
  padding: '12px 14px',
  border: '1.5px solid #C8E8E5',
  borderRadius: 10,
  fontSize: 15,
  background: '#FFFFFF',
  color: '#2D4459',
  boxSizing: 'border-box',
  outline: 'none',
  fontFamily: 'inherit',
};

const LABEL_STYLE = {
  display: 'block',
  fontSize: 13,
  fontWeight: 600,
  color: '#2D4459',
  marginBottom: 6,
};

export default function MemberForm() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [pitch, setPitch] = useState('');
  const [event, setEvent] = useState('');
  const [eventLink, setEventLink] = useState('');
  const [announcement, setAnnouncement] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!pitch.trim() && !event.trim() && !announcement.trim()) {
      setError('Please fill in at least one field: Pitch, Event, or Announcement.');
      return;
    }
    setError('');
    setStatus('loading');
    const result = await submitContribution({
      member_name: name.trim(),
      company: company.trim(),
      pitch: pitch.trim(),
      event: event.trim(),
      event_link: eventLink.trim(),
      announcement: announcement.trim(),
    });
    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setError(result.error || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#2D4459',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 24px',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: '50%',
          background: '#3BBFBF',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28, marginBottom: 20,
          color: '#FFFFFF', fontWeight: 700,
        }}>✓</div>
        <h2 style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 700,
          marginBottom: 8, textAlign: 'center' }}>
          You are in, {name}!
        </h2>
        <p style={{ color: '#C8E8E5', fontSize: 15,
          textAlign: 'center', marginBottom: 32 }}>
          Your contribution has been added to this week&apos;s recap.
        </p>
        <button
          type="button"
          onClick={() => {
            setName(''); setCompany(''); setPitch('');
            setEvent(''); setEventLink(''); setAnnouncement('');
            setStatus('idle'); setError('');
          }}
          style={{
            background: '#3BBFBF', color: '#FFFFFF',
            border: 'none', borderRadius: 10,
            padding: '14px 32px', fontSize: 15,
            fontWeight: 600, cursor: 'pointer',
          }}
        >
          Add Another
        </button>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FEFAF5',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    }}>
      <div style={{
        background: '#2D4459',
        padding: '20px 24px 16px',
        borderBottom: '3px solid #3BBFBF',
      }}>
        <p style={{ color: '#C8E8E5', fontSize: 11, fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 4px' }}>
          DR. DATA DECISION INTELLIGENCE
        </p>
        <h1 style={{ color: '#FFFFFF', fontSize: 22,
          fontWeight: 700, margin: '0 0 2px' }}>
          {CHAPTER_NAME}
        </h1>
        <p style={{ color: '#C8E8E5', fontSize: 13, margin: 0 }}>
          Add your contribution for today&apos;s meeting
        </p>
      </div>

      <div style={{ padding: '24px 20px', maxWidth: 600, margin: '0 auto' }}>

        <div style={{ marginBottom: 18 }}>
          <label style={LABEL_STYLE}>
            Your Name <span style={{ color: '#F05F57' }}>*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            style={INPUT_STYLE}
          />
        </div>

        <div style={{ marginBottom: 18 }}>
          <label style={LABEL_STYLE}>
            Company + Website{' '}
            <span style={{ color: '#7A8F95', fontWeight: 400 }}>(optional)</span>
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Acme Inc. · acme.com"
            style={INPUT_STYLE}
          />
        </div>

        <div style={{
          height: 1, background: '#C8E8E5', margin: '8px 0 24px',
        }} />

        <div style={{ marginBottom: 18 }}>
          <label style={LABEL_STYLE}>
            Your Pitch{' '}
            <span style={{ color: '#7A8F95', fontWeight: 400 }}>(optional)</span>
          </label>
          <textarea
            value={pitch}
            onChange={(e) => setPitch(e.target.value)}
            placeholder="What do you do and who is your ideal referral?"
            rows={3}
            style={{ ...INPUT_STYLE, resize: 'vertical' }}
          />
        </div>

        <div style={{ marginBottom: 18 }}>
          <label style={LABEL_STYLE}>
            Event or Resource{' '}
            <span style={{ color: '#7A8F95', fontWeight: 400 }}>(optional)</span>
          </label>
          <input
            type="text"
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            placeholder="Event name, date, and what people should know..."
            style={INPUT_STYLE}
          />
        </div>

        <div style={{ marginBottom: 18 }}>
          <label style={LABEL_STYLE}>
            Event Link{' '}
            <span style={{ color: '#7A8F95', fontWeight: 400 }}>(optional)</span>
          </label>
          <input
            type="url"
            value={eventLink}
            onChange={(e) => setEventLink(e.target.value)}
            placeholder="https://..."
            style={INPUT_STYLE}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={LABEL_STYLE}>
            Announcement or Message{' '}
            <span style={{ color: '#7A8F95', fontWeight: 400 }}>(optional)</span>
          </label>
          <textarea
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
            placeholder="Anything else for the chapter?"
            rows={3}
            style={{ ...INPUT_STYLE, resize: 'vertical' }}
          />
        </div>

        {error && (
          <div style={{
            background: '#FEF2F2', border: '1px solid #F05F57',
            borderRadius: 8, padding: '10px 14px',
            color: '#F05F57', fontSize: 13,
            marginBottom: 16,
          }}>
            {error}
          </div>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={status === 'loading'}
          style={{
            width: '100%',
            padding: '15px',
            background: status === 'loading' ? '#7A8F95' : '#2D4459',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          }}
        >
          {status === 'loading' ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
}
