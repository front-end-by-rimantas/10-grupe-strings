function templateHTML( target, data ) {
    let HTML = '';
    const originalTemplate = document.querySelector(target + ' > script').innerHTML;

    for ( let i=0; i<data.length; i++) {
        const service = data[i];
        const keywords = Object.keys( service );

        let template = originalTemplate;

        for ( let k=0; k<keywords.length; k++ ) {
            const pattern = `{{${keywords[k]}}}`;
            while ( template.indexOf( pattern ) >= 0 ) {
                template = template.replace( pattern, service[ keywords[k] ] );
            }
        }

        HTML += template;
    }
    
    return document.querySelector(target).innerHTML = HTML;
}