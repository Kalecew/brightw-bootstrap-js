const themes = [ 
	{title: 'Keira', autor: 'inaikas', img:'theme1.jpg' }, 
	{title: 'SRK', autor: 'theme_ocean', img:'theme2.jpg' }, 
	{title: 'EduPro', autor: 'gonthemes', img:'theme3.jpg' }, 
	{title: 'EightyDays', autor: 'GretaThemes', img:'theme4.jpg' }, 
	{title: 'Lily', autor: 'AqThemes', img:'theme5.jpg' }, 
	{title: 'Daisy', autor: 'AqThemes', img:'theme6.jpg' }, 
	{title: 'Nutritia', autor: 'YetiTeam', img:'theme7.jpg' }, 
	{title: 'Techup', autor: 'YetiTeam', img:'theme8.jpg' }, 
	{title: 'Kanter', autor: 'BrainiakThemes', img:'theme9.jpg' }, 
	{title: 'Moreno', autor: 'Brickthemes', img:'theme10.jpg' }, 
	{title: 'Homeswort', autor: 'RockThemes', img:'theme11.jpg' }, 
	{title: 'Angel', autor: 'iamAbdus', img:'theme12.jpg' }
] 
function createListItem(theme) { 
	return ` 
		<li class="col">
      <div class="card h-100 border-0">              
        <div class="card-body text-center">
          <a href="#" class="card-title text-secondary h4 text-decoration-none">${theme.title}</a>
          <p class="card-text text-black-50">от ${theme.autor}</p>
        </div>
        <a href="#"><img src="files/${theme.img}" width="400" height="250" class="card-img-bottom" alt="..."></a>
      </div>
    </li>
	` 
} 
const temp = themes.map(theme => createListItem(theme)) 
const html = temp.join(' ') 
document.querySelector('.themes-list').innerHTML = html 