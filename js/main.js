const ilgas = 'Lorem ipsum dolor js amet fuck adipisicing elit. Minima, ea nulla numquam earum fuck js eos voluptatibus aliquam maiores facilis. Perspiciatis fuck quae saepe praesentium sit? Quidem blanditiis fuck mollitia!';
const trumpas = 'Lorem ipsum dolor sit amet';
const zodis = 'dolor';

const tekstai = [ilgas, trumpas, zodis, 'ajsdbfkjasd'];

const sakinys = 'Teksto "asaksjdfn" ilgis yra  9 simboliai.';

for ( let i=0; i<tekstai.length; i++ ) {
    const tekstas = tekstai[i];

    const s1 = `Teksto "${tekstas}" ilgis yra  ${tekstas.length} simboliai.`;
    console.log(s1);
}

console.log('-------------');


let a = 'a';
let b = 'b';
let temp = '';

temp = a;
a = b;
b = temp;

console.log(`a: ${a}, b: ${b}`);

console.log('-------------');
console.log('TEKSTO PAIESKA IR REPLACE\'inimas');

// ilgas -> grazus : ['fuck'] => '****'
const keiksmazodziai = ['fuck', 'js'];
let grazus = ilgas;


for ( let i=0; i<keiksmazodziai.length; i++ ) {
    while ( grazus.indexOf( keiksmazodziai[i] ) >= 0 ) {
        grazus = grazus.replace( keiksmazodziai[i], '****' );
        console.log(grazus);
    }
}


console.log('-------------');
console.log('TEMPLATES');

const services = [
    { name: 'Design', location: 'Vilnius', pricingFrom: 20 },
    { name: 'Development', location: 'Vilnius', pricingFrom: 30 },
    { name: 'Chat', location: 'Web', pricingFrom: 5 }
];

templateHTML( '#service_template', services );

const testimonials = [
    { name: 'John', stars: 5, text: 'Lorem ipsum' },
    { name: 'Ona', stars: 4, text: 'Lorem ipsum dolor' },
    { name: 'Check', stars: 5, text: 'Norris' }
];

templateHTML( '#testimonials_template', testimonials );