<style type="text/css">

   .pd-captcha{
       display:inherit !important;
   }
   
  .pd-checkbox .Form__Element__Caption{
    display: inline;
    vertical-align: super;
  }
  
  .Form__Element input[type="checkbox"]{
    width: 2.4rem;
    height: 2.4rem;
    -webkit-appearance: checkbox;
    background-color: initial;
    cursor: pointer;
    display: inline;
  }
  
  .Form__Element input, .Form__Element textarea{
    width: 100%;
    height: 4.8rem;
    padding: 1.5rem;
    background-color: #f3f3f3;
    border: .1rem solid #ccc;
    border-radius: 0;
    -webkit-appearance: none;
    color: #294754;
  }
  
  .Form__Element textarea{
    height: 19.2rem;
  }
  
  .Form__Element select{
    font-family: Helvetica Neue LT W06_57 Cond,helvetica,arial,sans-serif;
    display: block;
    padding: 1.2rem 4.2rem 1.2rem 1.5rem;
    font-size: 1.6rem;
    color: #3e6c80!important;
    border: 1px solid #b9c9dd;
    background: #fff;
    text-transform: uppercase;
    margin: 2rem 0;
    position: relative;
    z-index: 11;
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 4.8rem;
	width: 100%;
	background-color: #f3f3f3;
  }
  
  html{
    background-color: white;
  }
  
  .errors, .error, .no-label{
    /*text-transform: uppercase;*/
    color: ##294754 !important;
  }
  
  .inline{
      position: fixed;
      padding-left: 10px;
      font-family: Helvetica Neue LT W06_57 Cond,helvetica,arial,sans-serif !important;
  }
  
  .Form__Element a{
      font-family: Helvetica Neue LT W06_57 Cond,helvetica,arial,sans-serif !important;
  }
  
  #ui-datepicker-div {
    font-size: 1.7rem;
    heigth: 4rem;
    margin: 2rem 0;
    padding: 0.9rem;
  }
  
  .ui-datepicker{ z-index: 9999 !important;}

</style>

<form accept-charset="UTF-8" method="post" action="%%form-action-url%%" class="Form" id="pardot-form">
%%form-opening-general-content%%

%%form-if-thank-you%%
	%%form-javascript-focus%%
	%%form-thank-you-content%%
	%%form-thank-you-code%%
%%form-end-if-thank-you%%

%%form-if-display-form%%

	%%form-before-form-content%%
		%%form-if-error%%
			<p class="errors">Please correct the errors below:</p>
		%%form-end-if-error%%
		
		%%form-start-loop-fields%%
			<div class="Form__Element FormTextbox %%form-field-class-type%% %%form-field-class-required%% %%form-field-class-hidden%% %%form-field-class-no-label%% %%form-field-class-error%% %%form-field-dependency-css%  %%form-field-css-classes%%">
				%%form-if-field-label%%
					<label class="Form__Element__Caption" for="%%form-field-id%%">%%form-field-label%%</label>
				%%form-end-if-field-label%%
				
				%%form-field-input%%
				%%form-if-field-description%%
					<span class="description">%%form-field-description%%</span>
				%%form-end-if-field-description%%
				
				<div id="error_for_%%form-field-id%%" style="display:none"></div>
			%%form-field-if-error%%
				<p class="error no-label">%%form-field-error-message%%</p>
			%%form-field-end-if-error%%
			</div>
		%%form-end-loop-fields%%
		
		%%form-spam-trap-field%%
		
		<!-- forces IE5-8 to correctly submit UTF8 content  -->
		<input name="_utf8" type="hidden" value="&#9731;" />
        <input type="submit" class="Form__Element FormSubmitButton" accesskey="s" value="%%form-submit-button-text%%" %%form-submit-disabled%%/>
	%%form-after-form-content%%
	
%%form-end-if-display-form%%

%%form-javascript-link-target-top%%
</form>

<!DOCTYPE html>
<html>
	<head>
	<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NM8MP49');</script>
<!-- End Google Tag Manager -->
		<base href="" >
		<meta charset="utf-8"/>
		<meta name="description" content="%%description%%"/>
		<title>%%title%%</title>
		<link rel="stylesheet" type="text/css" href="https://www.yit.fi/styles/1.0.0.444_styles.css">
		<link rel="stylesheet" href="/scripts/styles.990037121f261e5f6579.css?v=21081">
        <link rel="dns-prefetch" href="https://fast.fonts.net" />
        <link rel="preconnect" href="https://fast.fonts.net" crossorigin />
        <link type="text/css" rel="stylesheet" href="//fast.fonts.net/cssapi/baf0e8e7-1677-4399-8f90-0abc0a1244f0.css" />
        
        <link href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" rel="stylesheet" /><script src="https://code.jquery.com/jquery-1.12.4.js"></script><script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js">
        

	</head>
	<body>
	<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NM8MP49"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
	    <main>
		    %%content%%
		</main>
	</body>
	
	      <script>
            $(".datepicker input").datepicker({
            	minDate: 0,
            	maxDate: "+1M",
            	dateFormat: "yy-mm-dd",
            	showAnim: "blind",
            	firstDay: 1,
            	showButtonPanel : true,
                beforeShowDay: $.datepicker.noWeekends
            });
            
             $(".datepicker input").attr('readonly', true);
            
        </script>
        
</html>



