game.TitleScreen = me.ScreenObject.extend({
    /**	
     *  action to perform on state change
     */
    onResetEvent: function() {
        me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage("Title-Screen")), -10); // TODO
        
        me.game.world.addChild(new (me.Renderable.extend({
            init: function() {
                this._super(me.Renderable, 'init', [270, 240, 300, 50]);
                this.font = new me.Font("Arial", 46, "red");
                //allows me to use the mouse instead of the keys
                me.input.registerPointerEvent('pointerdown', this, this.newGame.bind(this), true);
            },
            draw: function(renderer) {
                this.font.draw(renderer.getContext(), "START A NEW GAME", this.pos.x, this.pos.y);
                
            },
          
            update: function(dt){
                return true;
            },
            
            newGame: function(){
                me.input.releasePointerEvent('pointerdown', this);
                me.state.change(me.state.PLAY);
            }

        })));
        
              me.game.world.addChild(new (me.Renderable.extend({
            init: function() {
                this._super(me.Renderable, 'init', [380, 340, 250, 50]);
                this.font = new me.Font("Arial", 46, "white");
                me.input.registerPointerEvent('pointerdown', this, this.newGame.bind(this), true);
            },
            draw: function(renderer) {
                this.font.draw(renderer.getContext(), "CONTINUE", this.pos.x, this.pos.y);
                
            },
            
            update: function(dt){
                return true;
            },
            
            newGame: function(){
                me.input.releasePointerEvent('pointerdown', this);
                me.save.add({exp: 0, exp1: 0, exp2: 0, exp3: 0, exp4: 0}),
                me.state.change(me.state.LOAD);
            }

        })));
       
   },
    /**	
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
       
    }
});