class Tooltip extends React.Component {
    constructor(props) {
        super(props)
        this.state = { opacity: false }
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        const tooltipNode = ReactDOM.findDOMNode(this)
        this.setState({
            opacity: !this.state.opacity,
            top: tooltipNode.offsetTop,
            left: tooltipNode.offsetLeft
        })
    }
    render() {
        const style = {
            zIndex: (this.state.opacity) ? 1000 : -1000,
            opacity: +this.state.opacity,
            top: (this.state.top || 0) + 20,
            left: (this.state.left || 0) - 30
        }
        return (
            <div style={{ display: 'inline' }}>
                <span style={{ color: 'blue' }}
                    onMouseEnter={this.toggle}
                    onMouseOut={this.toggle}>
                    {this.props.children}
                </span>
                <div className="tooltop bottom"
                style={style} role="tooltip">
                <div className="tooltip"></div>
                <div className="tooltop-inner">
                    {this.props.text}
                </div>
                </div>
                
            </div>
        )
    }
}

ReactDOM.render(<div><Tooltip text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odit. Fugiat impedit totam explicabo veniam saepe hic voluptatem, recusandae itaque.">React Quickly</Tooltip></div>, document.getElementById('tooltip'))
