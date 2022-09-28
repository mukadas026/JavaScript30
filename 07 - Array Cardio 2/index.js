const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  let is19 = people.some((obj) => {
    return Math.abs(obj.year - new Date().getFullYear()) === 19
  })

  let ID = 823423;
  let comment = comments.forEach((obj, i) => {
    if(obj.id == ID){
      comments.splice(i,1);
      return;
    }

  });

  console.log(comments)