var ClickTitleChild=React.createClass({
	render:function(){
		return (<span class="octicon octicon-link">{this.props.theHrefText}</span>);
	}
});
var ClickTitle = React.createClass({
	render:function(){
		return (<a id="unclosablegithubio" class="anchor" href={this.props.thehref} aria-hidden="true">
			<ClickTitleChild theHrefText={this.props.theHrefText}/></a>);
	}
});
var Title = React.createClass({
	render:function(){
		return (<h1>
			<ClickTitle theHrefText={this.props.theHrefText} thehref={this.props.thehref}/>
			{this.props.titlsText}
			</h1>);
	}
});
var Content = React.createClass({
	render:function(){
		return (<p>{this.props.contentText}</p>);
	}
});
var Section = React.createClass({
	render:function() {
		return (<section id="main_content" class="inner">
			<Title  theHrefText={this.props.theHrefText} thehref={this.props.thehref} titlsText={this.props.titlsText}/>
			<Content contentText={this.props.contentText}/>
			</section>);
	}
});