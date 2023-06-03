    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];

    const frame = document.querySelector('.frame');
    const trigger = document.createElement('div')

    frame.appendChild(trigger);
    trigger.className = 'triggers';

    alpha.forEach(function(e){
        const inp = document.createElement('input')
        trigger.appendChild(inp);
        inp.className = 'radio'
        inp.id = 'morse-' + e;
        inp.type = 'radio';
        inp.name = 'morse';
        const lab = document.createElement('label')
        trigger.appendChild(lab);
        lab.className = 'trigger'
        lab.id = 'label-' + e;
        lab.htmlFor = 'morse-' + e;
        lab.innerHTML = e; 
    });

    const light = document.createElement('div');
    trigger.appendChild(light);
    light.className = 'light'