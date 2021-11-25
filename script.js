class Navbar extends React.Component {

    render (){
        return <nav className="flex">
                    <h1>NAVBAR</h1>

                <ul className="menu flex">
                    <li><a href="#">lien 1</a></li>
                    <li><a href="#">lien 2</a></li>
                    <li><a href="#">lien 3</a></li>
                    <li><a href="#">lien 4</a></li>
                    <li><a href="#">lien 5</a></li>
                    <li><a href="#">lien 6</a></li>
                    <li><a href="#">lien 7</a></li>
                </ul>

                <div className="burger">
                    <i class="fas fa-bars"></i>
                </div>

                </nav> 
    }
}

ReactDOM.render(<Navbar/>, document.getElementById("app"))