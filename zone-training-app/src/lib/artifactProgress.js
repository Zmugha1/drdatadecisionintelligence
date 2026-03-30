/** Seven milestone artifacts toward the terminal learning objective (aligned with Learning Progress UI). */
export function getArtifactMilestones(ls) {
  const hasVoice = !!(ls?.voice?.context);
  const hasJob = !!(ls?.selectedJob);
  return [
    { label: "Zone Position", done: !!(ls?.zonePosition), mod: "M00" },
    { label: "Job Selected", done: hasJob, mod: "M01" },
    { label: "Voice Built", done: hasVoice, mod: "M02" },
    { label: "Steps Defined", done: false, mod: "M03" },
    { label: "Flow + Boundary", done: false, mod: "M04" },
    { label: "Evaluation Loop", done: false, mod: "M05" },
    { label: "Zone System v1.0", done: false, mod: "M06" },
  ];
}

export function artifactDoneCount(ls) {
  return getArtifactMilestones(ls).filter((a) => a.done).length;
}
