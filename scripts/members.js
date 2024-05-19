fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        const membros = data.membros;

        membros.forEach((membro, index) => {

            if (membro.dates.egressOnda !== null) {
                return;
            }

            const memberElement = document.getElementById(`member${index + 1}`);
            memberElement.querySelector('img').src = membro.image;
            memberElement.querySelector('img').alt = membro.name;
            memberElement.querySelector('h3').textContent = membro.name;
            memberElement.querySelector('p#member1-dates').textContent = `Semestre de Ingresso na UFBA: ${membro.dates.UFBA}`;
            

            const ondaIngresso = document.createElement('p');
            ondaIngresso.textContent = `Semestre de Ingresso na Onda Elétrica: ${membro.dates.joinOnda}`;
            memberElement.querySelector('.team-card').appendChild(ondaIngresso);
            

            if (membro.bio) {
                const bioElement = document.createElement('p');
                bioElement.textContent = `Bio: ${membro.bio}`;
                memberElement.querySelector('.team-card').appendChild(bioElement);
            }
            

            if (membro.social) {
                membro.social.forEach(social => {
                    if (social.name === 'email') {
                        const emailElement = document.createElement('p');
                        emailElement.textContent = `Email: ${social.link}`;
                        memberElement.querySelector('.team-card').appendChild(emailElement);
                    }
                });
            }
        });
    });
