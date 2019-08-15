class Menu extends React.Component {
    render() {
        let menus = ['a', 'b', 'c', 'd'];
        return React.createElement(
            'div',
            null,
            menus.map((v, i) => {
                React.createElement(Link, { label: v });
            })
        );
    }
}

class Link extends React.Component {
    render() {
        const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');
        return React.createElement(
            'div',
            null,
            React.createElement(
                'a',
                { href: url },
                this.props.label
            ),
            React.createElement('br', null)
        );
    }
}

ReactDOM.render(React.createElement(Menu, null), document.getElementById('menu'));
