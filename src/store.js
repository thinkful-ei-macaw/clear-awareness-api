const uuid = require("uuid/v4");

const quotes = [
  {
    id: uuid(),
    quotation:
      "Anxiety arises from not being able to see the whole picture. If you feel anxious, but are not sure why, try putting your things in order.",
    author: "Marie Kondo",
  },
  {
    id: uuid(),
    quotation: "It takes as much energy to wish as it does to plan.",
    author: "Eleanor Roosevelt",
  },
  {
    id: uuid(),
    quotation:
      "Entrepreneurs are simply those who understand that there is little difference between obstacle and opportunity and are able to turn both to their advantage.",
    author: "Niccolo Machiavelli",
  },
  {
    id: uuid(),
    quotation:
      "The less you open your heart to others, the more your heart suffers",
    author: "Deepak Chopra",
  },
  {
    id: uuid(),
    quotation:
      "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
    author: "Confucius",
  },
  {
    id: uuid(),
    quotation: "The secret of getting ahead is getting started",
    author: "Mark Twain",
  },
  {
    id: uuid(),
    quotation: "Don't count the days, make the days count.",
    author: "Muhammad Ali",
  },
  {
    id: uuid(),
    quotation:
      "Im no longer accepting the things I cannot change...Im changing the things I cannot accept",
    author: "Angela Davis",
  },
  {
    id: uuid(),
    quotation: "You will never fail untl you stop trying",
    author: "Albert Einstein",
  },
  {
    id: uuid(),
    quotation:
      "Real generosity toward the future lies in giving all to the present",
    author: "Albert Camus",
  },
  {
    id: uuid(),
    quotation: "When one door is closed, dont you know, another is open.",
    author: "Bob Marley",
  },
  {
    id: uuid(),
    quotation: "Nothing great was ever achieved without enthusiasm",
    author: "Ralph Waldo Emerson",
  },
  {
    id: uuid(),
    quotation: "Fear is the mind-killer.",
    author: "Frank Herbert",
  },
  {
    id: uuid(),
    quotation: "A mind is like a parachute. It doesn't work if it is not open.",
    author: "Frank Zappa",
  },
  {
    id: uuid(),
    quotation: "Live your beliefs and you can turn the world around.",
    author: "Henry David Thoreau",
  },
  {
    id: uuid(),
    quotation: "The imagination is the golden pathway to everywhere.",
    author: "Terrence McKenna",
  },
  {
    id: uuid(),
    quotation:
      "Experience is not what happens to you; its what you do with what happens to you.",
    author: "Aldous Huxley",
  },
  {
    id: uuid(),
    quotation: "Dreams and reality are opposites. Action synthesizes them.",
    author: "Assata Shakur",
  },
  {
    id: uuid(),
    quotation:
      "At the end of the day, we can endure much more than we think we can.",
    author: "Frida Kahlo",
  },
  {
    id: uuid(),
    quotation: "We must prove our predictions about the future with action.",
    author: "George Jackson",
  },
  {
    id: uuid(),
    quotation:
      "I can do nothing for you but work on myself...you can do nothing for me but work on yourself!",
    author: "Ram Dass",
  },
  {
    id: uuid(),
    quotation:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha",
  },
  {
    id: uuid(),
    quotation:
      "He who would do good to another must do it in Minute Particulars; General Good is the plea of the scoundrel, hypocrite and flatterer: For Art and Science cannot exist but in minutely organized Particulars.",
    author: "William Blake",
  },
  {
    id: uuid(),
    quotation:
      "Procrastination is the bad habit of putting off until the day after tomorrow what should have been done the day before yesterday.",
    author: "Napoleon Hill",
  },
  {
    id: uuid(),
    quotation:
      "Man suffers only because he takes seriously what the gods made for fun.",
    author: "Alan Watts",
  },
  {
    id: uuid(),
    quotation:
      "To have faith is to trust yourself to the water. When you swim you don’t grab hold of the water, because if you do you will sink and drown. Instead you relax, and float",
    author: "Alan Watts",
  },
  {
    id: uuid(),
    quotation:
      "Bad ideas, however sacred, cannot survive the company of good ones forever",
    author: "Sam Harris",
  },
  {
    id: uuid(),
    quotation:
      "Freedom is not worth having if it does not include the freedom to make mistakes",
    author: "Mahatma Gandhi",
  },
  {
    id: uuid(),
    quotation: "The journey of a thousand miles begins with one step",
    author: "Lao Tzu",
  },
  {
    id: uuid(),
    quotation:
      "If you don't know where you are going, any road will get you there",
    author: "Lewis Carroll",
  },
  {
    id: uuid(),
    quotation:
      "If you're trying to achieve, there will be roadblocks. I've had them; everybody has had them. But obstacles don't have to stop you. If you run into a wall, don't turn around and give up. Figure out how to climb it, go through it, or work around it",
    author: "Michael Jordan",
  },
  {
    id: uuid(),
    quotation:
      "Never tell people how to do things. Tell them what to do and they will surprise you with their ingenuity",
    author: "George S. Patton",
  },
  {
    id: uuid(),
    quotation: "Being entirely honest with oneself is a good exercise",
    author: "Sigmund Freud",
  },
  {
    id: uuid(),
    quotation: "Being entirely honest with oneself is a good exercise",
    author: "Socrates",
  },
  {
    id: uuid(),
    quotation:
      "The greater danger for most of us lies not in setting our aim too high and falling short; but in setting our aim too low, and achieving our mark",
    author: "Michelangelo",
  },
  {
    id: uuid(),
    quotation:
      "The greater danger for most of us lies not in setting our aim too high and falling short; but in setting our aim too low, and achieving our mark",
    author: "Satchel Paige",
  },
  {
    id: uuid(),
    quotation:
      "The greater danger for most of us lies not in setting our aim too high and falling short; but in setting our aim too low, and achieving our mark",
    author: "Benjamin Franklin",
  },
  {
    id: uuid(),
    quotation:
      "You've got to go out on a limb sometimes because that's where the fruit is",
    author: "Will Rogers",
  },
  {
    id: uuid(),
    quotation:
      "In dwelling, live close to the ground. In thinking, keep to the simple. In conflict, be fair and generous. In governing, don't try to control. In work, do what you enjoy. In family life, be completely present",
    author: "Lao Tzu",
  },
  {
    id: uuid(),
    quotation: "It's easier to resist at the beginning than at the end",
    author: "Leonardo da Vinci",
  },
  {
    id: uuid(),
    quotation:
      "But life is long. And it is the long run that balances the short flare of interest and passion",
    author: "Slyvia Plath",
  },
  {
    id: uuid(),
    quotation:
      "Wisdom ceases to be wisdom when it becomes too proud to weep, too grave to laugh, and too selfish to seek other than itself",
    author: "Khalil Gibran",
  },
  {
    id: uuid(),
    quotation: "Habit, if not resisted, soon becomes necessity",
    author: "Saint Augustine",
  },
  {
    id: uuid(),
    quotation: "Habit, if not resisted, soon becomes necessity",
    author: "Henry Ford",
  },
  {
    id: uuid(),
    quotation: "Look twice before you leap",
    author: "Charlotte Bronte",
  },
  {
    id: uuid(),
    quotation: "Discipline is the bridge between goals and accomplishment",
    author: "Jim Rohn",
  },
  {
    id: uuid(),
    quotation: "Wisdom is a sacred communion",
    author: "Victor Hugo",
  },
  {
    id: uuid(),
    quotation:
      "Genius is one percent inspiration and ninety-nine percent perspiration",
    author: "Thomas A. Edison",
  },
  {
    id: uuid(),
    quotation:
      "Genius is one percent inspiration and ninety-nine percent perspiration",
    author: "Antoine de Saint-Exupery",
  },
];

module.exports = { quotes };
