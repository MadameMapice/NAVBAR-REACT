class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state={ouvert:true}
        this.clickBurger=this.clickBurger.bind(this)
    }

clickBurger(){
    this.setState({ouvert:!this.state.ouvert})
}
    render (){
        let maClasse=""
        if(this.state.ouvert==true){
            maClasse="menu flex ouvert"
        }
        else{
            maClasse="menu flex"
        }
        return <nav className="flex">
                    <h1>NAVBAR</h1>
                    
<div className="burger" onClick={this.clickBurger}>
                    <i className="fas fa-bars"></i>
                </div>
                
                <ul className={maClasse}>
                    <li><a href="#">lien 1</a></li>
                    <li><a href="#">lien 2</a></li>
                    <li><a href="#">lien 3</a></li>
                    <li><a href="#">lien 4</a></li>
                    <li><a href="#">lien 5</a></li>
                    <li><a href="#">lien 6</a></li>
                    <li><a href="#">lien 7</a></li>
                </ul>

                

                </nav> 
    }
}

ReactDOM.render(<Navbar/>, document.getElementById("app"))