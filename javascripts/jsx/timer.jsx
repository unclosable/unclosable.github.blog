var Timer = React.createClass({
  //获取初始化状态
  getInitialState: function() {
    return this.getTimeNow();
  },
  //一个操作函数
  tick: function() {
    this.setState(this.getTimeNow());
  },
  //组件安装
  componentDidMount: function() {
    //setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式
    this.interval = setInterval(this.tick, 1000);
  },
  //组件卸载
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  getTimeNow:function(){
    var date=new Date();
    return {
      year:date.getYear()+1900,
      month:date.getMonth()+1,
      day:date.getDate(),
      hours:date.getHours(),
      minutes:date.getMinutes(),
      seconds:date.getSeconds()
    };
  },
  render: function() {
    return (
      <div>{this.state.year}-{this.state.month}-{this.state.day} {this.state.hours}:{this.state.minutes}:{this.state.seconds}</div>
      );
  }
});
var forkme_banner=$("#forkme_banner");
ReactDOM.render(<Timer />, forkme_banner[0]);