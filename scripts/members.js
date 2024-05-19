fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        const membros = data.membros;
        const teamMembersContainer = document.getElementById('team-members');

        membros.forEach((membro, index) => {
            if (membro.dates.egressOnda === null) {
                const memberElement = document.createElement('div');
                memberElement.className = 'team-member';
                memberElement.id = `member${index + 1}`;

                const imgElement = document.createElement('img');
                imgElement.src = membro.image;
                imgElement.alt = `Foto de ${membro.name}`;

                const teamCardElement = document.createElement('div');
                teamCardElement.className = 'team-card';

                const nameElement = document.createElement('h3');
                nameElement.textContent = membro.name;

                const datesElement = document.createElement('p');
                datesElement.textContent = `Semestre de Ingresso na UFBA: ${membro.dates.UFBA}, Semestre de Ingresso no Onda: ${membro.dates.joinOnda}`;

                const bioElement = document.createElement('p');
                bioElement.textContent = membro.bio;

                const emailElement = document.createElement('p');
                const emailLink = document.createElement('a');
                emailLink.href = membro.social.find(social => social.name === 'email').link;
                emailLink.textContent = membro.social.find(social => social.name === 'email').link;
                emailElement.appendChild(emailLink);

                teamCardElement.appendChild(nameElement);
                teamCardElement.appendChild(datesElement);
                teamCardElement.appendChild(bioElement);
                teamCardElement.appendChild(emailElement);

                memberElement.appendChild(imgElement);
                memberElement.appendChild(teamCardElement);

                teamMembersContainer.appendChild(memberElement);
            }
        });
    })
    .catch(error => console.error('Erro ao carregar os membros:', error));
