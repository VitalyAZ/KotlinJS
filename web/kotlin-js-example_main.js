define(['exports', 'kotlin', 'kotlinx-html-js'], function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var Unit = Kotlin.kotlin.Unit;
  var h1 = $module$kotlinx_html_js.kotlinx.html.h1_vmej1w$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var setOf_0 = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var li = $module$kotlinx_html_js.kotlinx.html.li_yzv5uh$;
  var ul = $module$kotlinx_html_js.kotlinx.html.ul_pzlyaf$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  function main$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Asia');
    return Unit;
  }
  function main$lambda$lambda($receiver) {
    set_classes($receiver, setOf('card-header'));
    h1($receiver, void 0, main$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf_0(['badge', 'badge-primary', 'badge-pill']));
    $receiver.unaryPlus_pdl1vz$('12');
    return Unit;
  }
  function main$lambda$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf_0(['list-group-item', 'd-flex', 'justify-content-between', 'align-items-center']));
    $receiver.unaryPlus_pdl1vz$('Hong Kong');
    span($receiver, void 0, main$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf('list-group'));
    li($receiver, void 0, main$lambda$lambda$lambda_0);
    return Unit;
  }
  function main$lambda($receiver) {
    set_classes($receiver, setOf('card'));
    set_style($receiver, 'width: 18rem;');
    div($receiver, void 0, main$lambda$lambda);
    ul($receiver, void 0, main$lambda$lambda_0);
    return Unit;
  }
  function main(args) {
    println('My app started');
    var root = document.getElementById('myApp');
    ensureNotNull(root).appendChild(div_0(get_create(document), void 0, main$lambda));
  }
  var package$com = _.com || (_.com = {});
  var package$home = package$com.home || (package$com.home = {});
  package$home.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('kotlin-js-example_main', _);
  return _;
});

//# sourceMappingURL=kotlin-js-example_main.js.map
