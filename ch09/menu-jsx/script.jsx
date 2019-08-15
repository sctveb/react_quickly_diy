class Menu extends React.Component {
    render() {
        let menus = ['a', 'b', 'c', 'd']
        return (
            <div>
                {menus.map((v, i) => { <Link label={v} /> })}
            </div>
        )
    }
}

class Link extends React.Component {
    render() {
        const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-')
        return (
            <div>
                <a href={url}>
                    {this.props.label}
                </a>
                <br />
            </div>
        )
    }
}

ReactDOM.render(
    React.createElement(
        Menu,
        null
    ),
    document.getElementById('menu')
)