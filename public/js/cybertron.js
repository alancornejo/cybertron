function objectToArray(e,i,a){e.forEach(function(e,l){return i.push(e[a])})}$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}});var loginSistema=function(){var e=$(".username").val(),i=$(".password").val();return""===e&&""===i?alertaSimple("","Favor de llenar todos los campos","error"):""===e?alertaSimple("","Favor de llenar el campo de Username","error"):""===i?alertaSimple("","Favor de llenar el campo de Password","error"):void $.ajax({beforeSend:function(){$(".btnLogin").html('<i class="fa fa-spin fa-spinner"></i> Cargando')},success:function(){$("#login-form").submit()}})},logoutSistema=function(){$.ajax({beforeSend:function(){alertaSimple("","Te desconectaste con exito","success"),setTimeout(function(){$("#logout-form").submit()},2e3)}})},alertaSimple=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments[1],a=arguments[2],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2e3;swal({title:e,html:i,type:a,showConfirmButton:!1,showCancelButton:!1,allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,timer:l}).then(function(){},function(e){})},alertaSuccess=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments[1],a=arguments[2],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2e3;swal({title:e,html:i,type:a,showConfirmButton:!1,showCancelButton:!1,allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,timer:l}).then(function(){},function(e){$(".modal").modal("toggle")})},loadingAjax=function(e,i){swal({html:e,type:i,showConfirmButton:!1,showCancelButton:!1,allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1}).then(function(){},function(e){})},loadingCss=function(){$("div.loading").html('<div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div>')},dataTable=function(e){$("#"+e).DataTable()},loadingSystem=function(e){$("div.bodySystem").fadeOut(function(){$("div.loading").fadeIn(function(){$(".bodySystem").load(e,function(){$("div.loading").fadeOut(function(){$(".bodySystem").fadeIn()})})})})},bodyModal=function(e,i){$(e).html('<div class="modal-content"><div class="modal-body"><div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="1000" aria-valuemin="0" aria-valuemax="100" style="width:100%">Cargando...</div></div></div></div>').promise().done(function(){$(e).load(i,function(){})})},activeDiv=function(e,i){$(e).removeClass("active"),$(i).addClass("active")},singleDate=function(e){$("input[name="+e).daterangepicker({locale:{format:"YYYY-MM-DD"},singleDatePicker:!0,showDropdowns:!0,autoApply:!1})},eventsingleDate=function(e,i){$("input[name=NaN").on("apply.daterangepicker",function(e,a){i=a.startDate.format("YYYY-MM-DD")})},CharUpper=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};$("#login-form").keypress(function(e){13==e.which&&loginSistema()});