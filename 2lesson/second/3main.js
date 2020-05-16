let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos vero officiis tempora quam quod maxime veniam, aliquam laudantium quae expedita rerum repellendus eligendi, velit accusantium. Voluptate quibusdam non vitae commodi neque consequuntur voluptatibus laborum minima temporibus quo quos at, cum, quaerat itaque possimus sunt? Facere perspiciatis aut voluptate quod vel, minus eaque dolorum, sint modi ipsa earum, repudiandae non assumenda doloremque nam incidunt tempora libero. Facilis voluptatem nobis eum? Ad adipisci accusamus ducimus assumenda sunt voluptatum voluptate architecto facere dolorem.'
let count = 0;
let iteration = Math.floor(text.length / 80)
let mas = text.split('')
while(count <= iteration*80){
	mas.splice(count,0,'<br>');
	count+=80
}
document.write(mas.join(''));

