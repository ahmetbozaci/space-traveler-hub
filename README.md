![](https://img.shields.io/badge/Microverse-blueviolet)

# Space Traveller Hub
## React application to keep book rockets and mission.
![screenshot](screencast.gif)
1.  Website include 3 pages,  `rockets`, `mission`, and `my profile.` The main page is the `rockets page`. 
2.  Use `react-router  v6`.  When clicking the page in the navigation bar that page is opening.
3.  Rockets and missions page include: 
       - Rockets from [API](https://api.spacexdata.com/v3/rockets).
       - Missions from [API](https://api.spacexdata.com/v3/missions).
       - Every rocket and mission  include a  button for sending API new key, value `reserved: true` also it is work reserve `reserved: false`
       - If `reserved: true`  `not a  member` **badge** change to `active member` **badge** on missions page or add  `reserved` **badge** on rockets page.
4. My profile page includes:
   - Missions and rockets which include `reserved: true`
   - Also this section includes the `leave` or `cancel` button for making `reserved: false`
   - Mission section includes an extra `read more` button that is opening a Wikipedia link about the mission.
   - Optional parts added to the kanban board.
5. Page styled with `react-bootstrap` so we make it responsive.




## Built With

- Html
- Javascript
- React
- Redux
- React-Bootstrap

## Live Demo

[Space Travelers Hub-Netlify](https://space-traveler-hub.netlify.app/)


## Setup
- Clone this project
```
- $ git clone `$ https://github.com/ahmetbozaci/space-traveler-hub`
- $ cd book-store
```
- Install npm packages
```
- $ npm install
```
- Open website
```
- $ npm start
```
## Authors

👤 **Ahmet Bozacı**
- Github:[ahmetbozaci](https://github.com/ahmetbozaci)
- Twitter:[ahmtbozaci](https://twitter.com/ahmtbozaci)
- LinkedIn:[ahmetbozaci](https://www.linkedin.com/in/ahmetbozaci/)

👤 **Victor Chukwu**
- GitHub: [@VICTOR-CHUKWU](https://github.com/VICTOR-CHUKWU)
- LinkedIn: [Victor-chukwu](https://www.linkedin.com/in/victor-chukwu-95a020143)
## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./LICENSE) licensed.
