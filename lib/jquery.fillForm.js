(function ( $ ) {
	$.fn.fillForm = function(options)
	{	
		var defaults = {
			all: true,
			onEnd: function(){},
			onChange: function(){},
			onStart: function(){},
			custom: {},
		}
		var defines	= {
			text: function() {return Math.random().toString(36).substr(2, 30);},
			password: function() {return Math.random().toString(36).substr(2, 30);},
			email: function() {return 'example@email.com'},
			checkbox: function() {
				return this.checked = true;
			},
			number: function() {
				return parseInt(Math.floor(Math.random() * (this.max - this.min + 1))) + parseInt(this.min);
			},
			search: function() {return Math.random().toString(36).substr(2, 30);},
			radio: function() {return $(this).prop('checked',true)},
			textarea: function() {return Math.random().toString(36).substr(2, 100);},
			'select-one': function(){
				this[parseInt(Math.floor(Math.random() * (this.length)))].selected = true;
			},
			'select-multiple': function(){
				for (var i=0;i<=parseInt(Math.floor(Math.random() * (this.length)));i++)
				{
					this[i].selected = true;
				}
			},
			// date: function() {},
			// range: function() {},
			// month: function() {},
			// week: function() {},
			// datetime: function() {},
			// tel: function() {},
			// url: function() {}
		}
		var settings = $.extend( {}, defaults, options );
		var textInputs = new Array("text","password","email","number","search","textarea");
		settings.onStart.call(this);
		this.find('input,textarea,select').each(function(k,v)
		{
			if (defines.hasOwnProperty(v.type) && (settings.all || v.required))
			{
				if (textInputs.indexOf(v.type) != -1)
				{
					value = defines[v.type].call(this);
					if (settings.custom.hasOwnProperty(v.type))
					{
						value = $.isFunction(settings.custom[v.type]) ? settings.custom[v.type]() : settings.custom[v.type];
					}
					settings.onChange.call(this);
					$(v).val(value);
				}
				else
				{
					defines[v.type].call(this);
				}
			}
		});
		settings.onEnd.call(this);
	}
 
}( jQuery ));