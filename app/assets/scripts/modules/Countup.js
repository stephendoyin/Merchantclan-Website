import { CountUp } from 'countup.js/dist/countUp';
import "waypoints/lib/noframework.waypoints";


class CountNumberUpAnim{
    constructor(){
      this.slider = document.getElementById('slider');
      if(this.slider)
        this.triggerWaypoint();
    }

    triggerWaypoint(){
      var waypoint = new Waypoint({
        element: document.getElementById('slider'),
        handler: function(direction) {
          if(direction === "down"){
            const optionsTwo = {
                duration: 4,
                suffix: 'K+',
              }
            const options = {
                duration: 4,
                suffix: '+',
              }
            const countUp = new CountUp('count-up', 500, options);
            const countUpTwo = new CountUp('count-up-two', 1, optionsTwo);
            const countUpThree = new CountUp('count-up-three', 500, options);
            const countUpFour = new CountUp('count-up-four', 15, options);
            if (!countUp.error) {
              countUp.start();
            } else {
              console.error(countUp.error);
            }
            if (!countUpTwo.error) {
              countUpTwo.start();
            } else {
              console.error(countUpTwo.error);
            }
            if (!countUpThree.error) {
              countUpThree.start();
            } else {
              console.error(countUpThree.error);
            }
            if (!countUpFour.error) {
              countUpFour.start();
            } else {
              console.error(countUpFour.error);
            }
          }
        },
        offset: '75%'
      })
    }

    

}

export default CountNumberUpAnim;