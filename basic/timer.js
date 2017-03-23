var start = new Date().getTime();
var TimerApplication = React.createClass({          
        render: function() {
          var timeNow = new Date().getTime();
          var elapsed = Math.round((timeNow - start) / 100);
          var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0');
          var message = 'React has been successfully running for ' + seconds + ' seconds.';
          return <p>{message}</p>;
        }      });
// here we don't have to create a factory object as this code is in JSX
setInterval(function() {
  ReactDOM.render(<TimerApplication/>, document.getElementById('root'))        
}, 50);