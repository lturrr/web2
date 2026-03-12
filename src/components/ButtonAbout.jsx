"use client";

const ButtonAbout = () => {
  const scrollToAchievements = () => {
    const achievementsSection = document.getElementById('achievements-section');
    if (achievementsSection) {
      achievementsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <button onClick={scrollToAchievements} className="btn btn_about">
      Больше информации
    </button>
  );
}

export default ButtonAbout;