const calculateSleepStatus = (sleepScore) => {
  if (sleepScore < 7) {
    return "Below Average Sleep";
  } else if (sleepScore <= 9) {
    return "Optimal Sleep";
  } else if (sleepScore <= 14) {
    return "Excessive Sleep";
  } else {
    return "Very Excessive Sleep";
  }
};

const calculateSleepTip = (sleepScore) => {
  if (sleepScore < 7) {
    return (
      "Your sleep is below average. Consider these tips:" +
      " 1. Exercise regularly, but not right before bed." +
      " 2. Keep your bedroom cool, dark, and quiet." +
      " 3. Try relaxation techniques such as deep breathing."
    );
  } else if (sleepScore <= 9) {
    return (
      "Great job! You're getting optimal sleep. Maintain it by:" +
      " 1. Continuing your consistent sleep schedule." +
      " 2. Avoiding screens before bed." +
      " 3. Keeping your sleep environment distraction-free."
    );
  } else if (sleepScore <= 14) {
    return (
      "You might be oversleeping. Consider these tips:" +
      " 1. Set a consistent wake-up time." +
      " 2. Avoid daytime naps longer than 20-30 minutes." +
      " 3. Stay active to maintain balanced energy levels."
    );
  } else {
    return (
      "Very excessive sleep may indicate underlying issues. Try these tips:" +
      " 1. Consult a healthcare professional for advice." +
      " 2. Gradually reduce your sleep duration to a healthy range." +
      " 3. Avoid oversleeping by setting an alarm and staying active during the day."
    );
  }
};

const createSleepEntry = (day, sleepScore) => {
  return {
    day,
    sleepScore,
    status: calculateSleepStatus(sleepScore),
  };
};

export { createSleepEntry, calculateSleepTip };
