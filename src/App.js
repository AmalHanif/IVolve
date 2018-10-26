import React, { Component } from 'react';
import './App.css';
import './application.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Main from './components/Main';
import ThemeHelper from './components/ThemeHelper';

class App extends Component {
  componentDidMount () {
    const script = document.createElement("script");
    
    script.type="text/babel";
    // <!-- page specific js -->
    script.src= "js/index.js";

    //  <!-- Page scripts -->
    script.src="../bower_components/bootstrap-select/dist/js/bootstrap-select.min.js";
    script.src="../bower_components/bootstrap_calendar/bootstrap_calendar/js/bootstrap_calendar.min.js";
    script.src="../bower_components/jquery.sparkline/index.js";
    script.src="../bower_components/flot.dashes/jquery.flot.dashes.js";
    script.src="../bower_components/flot/jquery.flot.symbol.js";
    script.src="../bower_components/flot/jquery.flot.crosshair.js";
    script.src="../bower_components/flot/jquery.flot.stack.js";
    script.src="../bower_components/flot/jquery.flot.pie.js";
    script.src="../bower_components/flot/jquery.flot.time.js";
    script.src="../bower_components/flot/jquery.flot.selection.js";
    script.src="../bower_components/flot-orderBars/js/jquery.flot.orderBars.js";
    script.src="../bower_components/flot/jquery.flot.js";
    script.src="../bower_components/flot.animator/jquery.flot.animator.min.js";
    // <!-- common app js -->
    script.src="js/app.js";
    script.src="js/settings.js";
   
   // <!-- common libraries. required for every page-->
    script.src="../bower_components/jquery-hammerjs/jquery.hammer.js";
    script.src="../bower_components/hammerjs/hammer.js";
    script.src="../bower_components/pace.js/pace.js";
    script.src="../bower_components/widgster/widgster.js";
    script.src="../bower_components/slimScroll/jquery.slimscroll.js";
    script.src="../bower_components/bootstrap/js/dist/util.js";
    script.src="../bower_components/bootstrap/dist/js/bootstrap.js";
    script.src="../bower_components/popper.js/dist/umd/popper.js";
    script.src="../bower_components/jquery-pjax/jquery.pjax.js";
    script.src="../bower_components/jquery/dist/jquery.min.js";
    
    
    script.async = true;

    document.body.appendChild(script);
}

  render() {
    return (
      <div className="App">
        
        <Sidebar/>
    {/* <!-- This is the white navigation bar seen on the top. A bit enhanced BS navbar. See .page-controls in _base.scss. --> */}
        <Navbar/>        
  
        <ThemeHelper/>
        <div className="content-wrap">
            {/* <!-- main page content. the place to put widgets in. usually consists of .row > .col-lg-* > .widget.  --> */}
           <Main/>
        </div>
        {/* <!-- The Loader. Is shown when pjax happens --> */}
        <div className="loader-wrap hiding hide">
            <i className="fa fa-circle-o-notch fa-spin-fast"></i>
        </div>
    
       
      </div>
    );
  }
}

export default App;
