 var SNES = (function () { 
    var Module = {
        preRun: [],
        postRun: [],
        print: function() {},
        printErr: function(text) {},
        setTarget : function(target) { this.canvas = target; },
        setStatus: function(text) {},
        totalDependencies: 0,
        monitorRunDependencies: function(left) {
          this.totalDependencies = Math.max(this.totalDependencies, left);
          Module.setStatus(left ? 'Preparing... (' + (this.totalDependencies-left) + '/' + this.totalDependencies + ')' : 'All downloads complete.');
        }
    };
 
 


    
return Module;
} ());