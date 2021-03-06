var $ = Backbone.$,
	PanelItem;

PanelItem = Marionette.ItemView.extend( {

    events : {
        click : 'onClick',
        keypress : 'onKeyPress'
    },

    modelEvents : {
        focus : 'onFocus'
    },

    template : '#tmpl-tailor-panel-default-item',

    /**
     * Uses the rendered template HTML as the $el.
     *
     * @since 1.0.0
     * @param html
     * @returns {exports}
     */
    attachElContent : function( html ) {
        var $el = $( html );

        this.$el.replaceWith( $el );
        this.setElement( $el );
        this.el.setAttribute( 'tabindex', 0 );

        return this;
    },

	/**
	 * Displays the associated panel when the item is clicked.
	 *
	 * @since 1.0.0
	 */
    onClick : function() {
        this.triggerMethod( 'show:panel' );
    },

	/**
	 * Displays the associated panel when the item is selected using the keyboard.
	 *
	 * @since 1.0.0
	 */
    onKeyPress : function( e ) {
        if ( 13 === e.which ) {
            this.triggerMethod( 'show:panel' );
        }
    },

	/**
	 * Sets focus on the list item.
	 *
	 * @since 1.0.0
	 */
    onFocus : function() {
        this.el.focus();
    }

} );

module.exports = PanelItem;
