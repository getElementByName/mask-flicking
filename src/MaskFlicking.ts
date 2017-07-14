import * as Flicking from "@egjs/flicking";

class MaskFlicking {
  public flicking: any;
  nowPanel: any;

  constructor(rootElement: HTMLElement, options? :any) {
    const flicking = new Flicking(rootElement, options);
    this.flicking = flicking;

    this.activePanel();

    flicking.on({
      "flickEnd": (e: any)=>{
        this.activePanel();
      }
    });
  }

  private activePanel(){
    const flicking = this.flicking;
    const nowPanel = flicking.getElement(flicking.getIndex());
    const prePanel = this.nowPanel;
    if(prePanel !== nowPanel){
      if(prePanel){
        $(prePanel).removeClass("on");
      }
      $(nowPanel).addClass("on");
      this.nowPanel = nowPanel;
    }
  }
}

export { MaskFlicking };
export default MaskFlicking;
