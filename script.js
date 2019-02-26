$(document).ready(function() {
  // LIBRARIES CODE
  function RadioButtonsUIComponentV4() {
    radiobuttonsuicomponentv4_debugService = null;
    radiobuttonsuicomponentv4_singlechoice_form = null;
    radiobuttonsuicomponentv4_singlechoice_chosen = null;
    radiobuttonsuicomponentv4__radioTranslations = null;
    /**
     * Describe this function...
     */
    this.isSelected = isSelected;

    function isSelected(index) {
      // Block#: .`OdvDU3D/%[wq(}jJG~
      if(radiobuttonsuicomponentv4_singlechoice_chosen == null) {
        return false;
      }
      // Block#: z]r4k3M;!jX8E/v%Ofx@
      if(radiobuttonsuicomponentv4_singlechoice_chosen == translate((com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponentv4_singlechoice_form, 'options'))[index], 'name')))) {
        return true;
      }
      return false;
    }
    /**
     * Describe this function...
     */
    this.getChoiceNum = getChoiceNum;

    function getChoiceNum() {
      // Block#: W(5zoR4P]hIe;;[$m`*N
      if(radiobuttonsuicomponentv4_singlechoice_form == null) {
        return 0;
      }
      return(com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponentv4_singlechoice_form, 'options')).length;
    }
    /**
     * Returns the selected choice.
     */
    this.getRadioButtonsValue = getRadioButtonsValue;

    function getRadioButtonsValue() {
      return radiobuttonsuicomponentv4_singlechoice_chosen;
    }
    /**
     * This function will show or hide the input from screen layout.
     */
    this.display = display;

    function display(visible) {
      return new Promise(function(resolve, reject) {
        // Block#: dq8@(Uf|R]WXAG8t!$J,
        if(visible) {
          // Block#: @#T]KSB}1ilGi6vn}e}S
          $('[obj-name="RadioButtonsInput_RadioButtons"]').show();
        } else {
          // Block#: %=:[fXs21+tt?}Ru4)@X
          $('[obj-name="RadioButtonsInput_RadioButtons"]').hide();
        }
      });
    }
    /**
     * Generates the choice list for radio buttons using field from api response.
     */
    this.setRadioButtons = setRadioButtons;

    function setRadioButtons(field, translations) {
      return new Promise(function(resolve, reject) {
        // Block#: y+O`bkfWB8g*r)flwTIQ
        if(translations != null) {
          // Block#: fXayMX6p*LKlQlN+%Uv1
          radiobuttonsuicomponentv4__radioTranslations = translations;
        } else {
          // Block#: :f*B`:}y7/87w0dEl|Uf
          radiobuttonsuicomponentv4__radioTranslations = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        }
        // Block#: G:5v5K((+6C1^^D#/3ul
        if(field != null) {
          // Block#: z4r{x-mg/uwNvy;f3Of(
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'type'), "EQUAL", 'radio-buttons')) {
            // Block#: p~spO)y=pN+#n!Omq7[j
            radiobuttonsuicomponentv4_singlechoice_form = field;
            // Block#: V4%Of.N%PMWuZNF.D7d=
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("RadioButtonsInput_RadioLabel", (translate((com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'name'))))); // Block#: VK-,dGCII-*;fuEP]z@3
            if((com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(field, 'value')) && (com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'value')) != null) {
              // Block#: =h%9*,QnPO|=D;b[jenN
              radiobuttonsuicomponentv4_singlechoice_chosen = translate((com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'value')));
            } else {
              // Block#: n5)NBz@cELlWz_fXl5tb
              radiobuttonsuicomponentv4_singlechoice_chosen = null;
            }
            // Block#: LY%*1/0]Wp@pf~j$G@a|
            hideError().then(response => {;
            });
            // Block#: cDOYpi.Z5Lo*@[{cX}13
            com.fc.JavaScriptDistLib.ListView.saveTemplateCell('RadioButtonsInput_RadioButtons');
            com.fc.JavaScriptDistLib.ListView.removeAllCells('RadioButtonsInput_RadioButtons');
            on_listview_length_configured_RadioButtonsInput_RadioButtons();
            // Block#: h3VcUUX2,h`pR7cS)te!
            $('[obj-name="RadioButtonsInput_RadioButtons"]').show();
          }
        }
      });
    }
    /**
     * This will hide error message.
     */
    this.hideError = hideError;

    function hideError() {
      return new Promise(function(resolve, reject) {
        // Block#: }N(6DKS#9;!@0+x`_p;#
        $('[obj-name="RadioButtonsInput_ErrorMsg"]').hide();
      });
    }
    /**
     * This function will set error text given the provided
     * message. The error will show up right after the update.
     */
    this.setError = setError;

    function setError(message) {
      return new Promise(function(resolve, reject) {
        // Block#: 9!fwE1..,ln6b[1C9++v
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("RadioButtonsInput_ErrorMsg", (com.fc.JavaScriptDistLib.TextLib.convertToText(message))); // Block#: w|z*Kj/z-:7)qb6N.9Hp
        $('[obj-name="RadioButtonsInput_ErrorMsg"]').show();
      });
    }
    /**
     * If input requires a value, it will check if user selected a choice or not.
     */
    this.isValid = isValid;

    function isValid() {
      // Block#: 27Xs)+-sake0^RKl?bn4
      if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponentv4_singlechoice_form, 'required')) && radiobuttonsuicomponentv4_singlechoice_chosen == null) {
        return false;
      }
      return true;
    }
    /**
     * Describe this function...
     */
    this.translate = translate;

    function translate(key) {
      // Block#: uWIGk}mj^QJ@;//OYxh0
      if((com.fc.JavaScriptDistLib.Storage.getValue('language')) == null || com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Storage.getValue('language'), "EQUAL", 'en-US')) {
        return key;
      }
      // Block#: *o[6*fjkPEwqmVpKBFNA
      if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponentv4__radioTranslations, key)) != null) {
        return com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponentv4__radioTranslations, key), com.fc.JavaScriptDistLib.Storage.getValue('language'));
      }
      return key;
    }
    // Block#: *-1*q`=;3lMIUq(x,NI-
    function on_listview_cell_configured_RadioButtonsInput_RadioBtnElement(RadioButtonsInput_RadioBtnElement, number) {
      try {
        // Block#: ,hcxE;uS}_%#NH+dp[Z=
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("RadioButtonsInput_RadioOption", (translate((com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponentv4_singlechoice_form, 'options'))[number], 'name'))))); // Block#: 79i3]n)?$;$IB`l$a+(X
        if(isSelected(number)) {
          // Block#: ~Yc$r6_[{uPJ{Sqf#~?}
          com.fc.JavaScriptDistLib.Image.setProperty["Image"]("RadioButtonsInput_RadioIcon", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.user81.radiobuttonsuicomponentv2/checked.png")));
        } else {
          // Block#: y,*?Rb^m(1m*qDe+v5)=
          com.fc.JavaScriptDistLib.Image.setProperty["Image"]("RadioButtonsInput_RadioIcon", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.user81.radiobuttonsuicomponentv2/unchecked.png")));
        }
        // Block#: J5w,4.z~*ce{b#Os6xA_
        if(com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponentv4_singlechoice_form, 'readOnly')) {
          // Block#: JiP.PT%Pl7799}RK%Uov
          com.fc.JavaScriptDistLib.ListView.setProperty["Alpha"](RadioButtonsInput_RadioBtnElement, 50);
        } else {
          // Block#: |.+UQkG;XK%##Z{duP0L
          com.fc.JavaScriptDistLib.ListView.setProperty["Alpha"](RadioButtonsInput_RadioBtnElement, 100);
        }
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    com.fc.JavaScriptDistLib.ListView.setConfigCallback('RadioButtonsInput_RadioBtnElement', on_listview_cell_configured_RadioButtonsInput_RadioBtnElement);
    // Block#: (U/IY;mnw@+LI-)RKeMG
    function on_listview_cell_clicked_RadioButtonsInput_RadioBtnElement(RadioButtonsInput_RadioBtnElement, number) {
      try {
        // Block#: CXG4lYA:qPMm8@sr]E*V
        if(!(com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponentv4_singlechoice_form, 'readOnly'))) {
          // Block#: 8s0%[R(WDaZ54sI8VTg*
          radiobuttonsuicomponentv4_singlechoice_chosen = translate((com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponentv4_singlechoice_form, 'options'))[number], 'name')));
          // Block#: ES/3qD5cnIf;ZuYHC$$0
          com.fc.JavaScriptDistLib.ListView.saveTemplateCell('RadioButtonsInput_RadioButtons');
          com.fc.JavaScriptDistLib.ListView.removeAllCells('RadioButtonsInput_RadioButtons');
          on_listview_length_configured_RadioButtonsInput_RadioButtons();
          // Block#: AT*/2w#7yVc)iS,}pJO@
          hideError().then(response => {;
          });
        }
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    }
    com.fc.JavaScriptDistLib.ListView.setClickCallback('RadioButtonsInput_RadioBtnElement', on_listview_cell_clicked_RadioButtonsInput_RadioBtnElement);
    // Block#: o34rL]Kq2N9/xW1L@Nm2
    function on_listview_length_configured_RadioButtonsInput_RadioButtons() {
      try {
        com.fc.JavaScriptDistLib.ListView.configureCells('RadioButtonsInput_RadioButtons', getChoiceNum());
        $('[obj-name="RadioButtonsInput_RadioButtons"]').children().each(function(i) {
          if(i >= 0) {
            com.fc.JavaScriptDistLib.ListView.setContext($(this));
            com.fc.JavaScriptDistLib.ListView.executeConfigCallback('RadioButtonsInput_RadioButtons', $(this), i);
            com.fc.JavaScriptDistLib.ListView.executeConfigHeightCallback('RadioButtonsInput_RadioButtons', $(this), i);
            com.fc.JavaScriptDistLib.ListView.resetContext($(this));
          }
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
  };
  var radiobuttonsuicomponentv4 = new RadioButtonsUIComponentV4();

  function RadioButtonsUIComponentV4Template(instance) {
    radiobuttonsuicomponentv4_debugService = null;
    radiobuttonsuicomponentv4_singlechoice_form = null;
    radiobuttonsuicomponentv4_singlechoice_chosen = null;
    radiobuttonsuicomponentv4__radioTranslations = null;
    /**
     * Describe this function...
     */
    this.isSelected = isSelected;

    function isSelected(index) {
      // Block#: .`OdvDU3D/%[wq(}jJG~
      if(radiobuttonsuicomponentv4_singlechoice_chosen == null) {
        return false;
      }
      // Block#: z]r4k3M;!jX8E/v%Ofx@
      if(radiobuttonsuicomponentv4_singlechoice_chosen == translate((com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponentv4_singlechoice_form, 'options'))[index], 'name')))) {
        return true;
      }
      return false;
    }
    /**
     * Describe this function...
     */
    this.getChoiceNum = getChoiceNum;

    function getChoiceNum() {
      // Block#: W(5zoR4P]hIe;;[$m`*N
      if(radiobuttonsuicomponentv4_singlechoice_form == null) {
        return 0;
      }
      return(com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponentv4_singlechoice_form, 'options')).length;
    }
    /**
     * Returns the selected choice.
     */
    this.getRadioButtonsValue = getRadioButtonsValue;

    function getRadioButtonsValue() {
      return radiobuttonsuicomponentv4_singlechoice_chosen;
    }
    /**
     * This function will show or hide the input from screen layout.
     */
    this.display = display;

    function display(visible) {
      return new Promise(function(resolve, reject) {
        // Block#: dq8@(Uf|R]WXAG8t!$J,
        if(visible) {
          // Block#: @#T]KSB}1ilGi6vn}e}S
          $('[obj-name="' + instance + '_RadioButtons"]').show();
        } else {
          // Block#: %=:[fXs21+tt?}Ru4)@X
          $('[obj-name="' + instance + '_RadioButtons"]').hide();
        }
      });
    }
    /**
     * Generates the choice list for radio buttons using field from api response.
     */
    this.setRadioButtons = setRadioButtons;

    function setRadioButtons(field, translations) {
      return new Promise(function(resolve, reject) {
        // Block#: y+O`bkfWB8g*r)flwTIQ
        if(translations != null) {
          // Block#: fXayMX6p*LKlQlN+%Uv1
          radiobuttonsuicomponentv4__radioTranslations = translations;
        } else {
          // Block#: :f*B`:}y7/87w0dEl|Uf
          radiobuttonsuicomponentv4__radioTranslations = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        }
        // Block#: G:5v5K((+6C1^^D#/3ul
        if(field != null) {
          // Block#: z4r{x-mg/uwNvy;f3Of(
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'type'), "EQUAL", 'radio-buttons')) {
            // Block#: p~spO)y=pN+#n!Omq7[j
            radiobuttonsuicomponentv4_singlechoice_form = field;
            // Block#: V4%Of.N%PMWuZNF.D7d=
            com.fc.JavaScriptDistLib.Label.setProperty["Text"](instance + "_RadioLabel", (translate((com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'name'))))); // Block#: VK-,dGCII-*;fuEP]z@3
            if((com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(field, 'value')) && (com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'value')) != null) {
              // Block#: =h%9*,QnPO|=D;b[jenN
              radiobuttonsuicomponentv4_singlechoice_chosen = translate((com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'value')));
            } else {
              // Block#: n5)NBz@cELlWz_fXl5tb
              radiobuttonsuicomponentv4_singlechoice_chosen = null;
            }
            // Block#: LY%*1/0]Wp@pf~j$G@a|
            hideError().then(response => {;
            });
            // Block#: cDOYpi.Z5Lo*@[{cX}13
            com.fc.JavaScriptDistLib.ListView.saveTemplateCell('RadioButtonsInput_RadioButtons');
            com.fc.JavaScriptDistLib.ListView.removeAllCells('RadioButtonsInput_RadioButtons');
            on_listview_length_configured_RadioButtonsInput_RadioButtons();
            // Block#: h3VcUUX2,h`pR7cS)te!
            $('[obj-name="' + instance + '_RadioButtons"]').show();
          }
        }
      });
    }
    /**
     * This will hide error message.
     */
    this.hideError = hideError;

    function hideError() {
      return new Promise(function(resolve, reject) {
        // Block#: }N(6DKS#9;!@0+x`_p;#
        $('[obj-name="' + instance + '_ErrorMsg"]').hide();
      });
    }
    /**
     * This function will set error text given the provided
     * message. The error will show up right after the update.
     */
    this.setError = setError;

    function setError(message) {
      return new Promise(function(resolve, reject) {
        // Block#: 9!fwE1..,ln6b[1C9++v
        com.fc.JavaScriptDistLib.Label.setProperty["Text"](instance + "_ErrorMsg", (com.fc.JavaScriptDistLib.TextLib.convertToText(message))); // Block#: w|z*Kj/z-:7)qb6N.9Hp
        $('[obj-name="' + instance + '_ErrorMsg"]').show();
      });
    }
    /**
     * If input requires a value, it will check if user selected a choice or not.
     */
    this.isValid = isValid;

    function isValid() {
      // Block#: 27Xs)+-sake0^RKl?bn4
      if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponentv4_singlechoice_form, 'required')) && radiobuttonsuicomponentv4_singlechoice_chosen == null) {
        return false;
      }
      return true;
    }
    /**
     * Describe this function...
     */
    this.translate = translate;

    function translate(key) {
      // Block#: uWIGk}mj^QJ@;//OYxh0
      if((com.fc.JavaScriptDistLib.Storage.getValue('language')) == null || com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Storage.getValue('language'), "EQUAL", 'en-US')) {
        return key;
      }
      // Block#: *o[6*fjkPEwqmVpKBFNA
      if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponentv4__radioTranslations, key)) != null) {
        return com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponentv4__radioTranslations, key), com.fc.JavaScriptDistLib.Storage.getValue('language'));
      }
      return key;
    }
    // Block#: *-1*q`=;3lMIUq(x,NI-
    function on_listview_cell_configured_RadioButtonsInput_RadioBtnElement(RadioButtonsInput_RadioBtnElement, number) {
      try {
        // Block#: ,hcxE;uS}_%#NH+dp[Z=
        com.fc.JavaScriptDistLib.Label.setProperty["Text"](instance + "_RadioOption", (translate((com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponentv4_singlechoice_form, 'options'))[number], 'name'))))); // Block#: 79i3]n)?$;$IB`l$a+(X
        if(isSelected(number)) {
          // Block#: ~Yc$r6_[{uPJ{Sqf#~?}
          com.fc.JavaScriptDistLib.Image.setProperty["Image"](instance + "_RadioIcon", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.user81.radiobuttonsuicomponentv2/checked.png")));
        } else {
          // Block#: y,*?Rb^m(1m*qDe+v5)=
          com.fc.JavaScriptDistLib.Image.setProperty["Image"](instance + "_RadioIcon", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.user81.radiobuttonsuicomponentv2/unchecked.png")));
        }
        // Block#: J5w,4.z~*ce{b#Os6xA_
        if(com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponentv4_singlechoice_form, 'readOnly')) {
          // Block#: JiP.PT%Pl7799}RK%Uov
          com.fc.JavaScriptDistLib.ListView.setProperty["Alpha"](RadioButtonsInput_RadioBtnElement, 50);
        } else {
          // Block#: |.+UQkG;XK%##Z{duP0L
          com.fc.JavaScriptDistLib.ListView.setProperty["Alpha"](RadioButtonsInput_RadioBtnElement, 100);
        }
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    com.fc.JavaScriptDistLib.ListView.setConfigCallback('RadioButtonsInput_RadioBtnElement', on_listview_cell_configured_RadioButtonsInput_RadioBtnElement);
    // Block#: (U/IY;mnw@+LI-)RKeMG
    function on_listview_cell_clicked_RadioButtonsInput_RadioBtnElement(RadioButtonsInput_RadioBtnElement, number) {
      try {
        // Block#: CXG4lYA:qPMm8@sr]E*V
        if(!(com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponentv4_singlechoice_form, 'readOnly'))) {
          // Block#: 8s0%[R(WDaZ54sI8VTg*
          radiobuttonsuicomponentv4_singlechoice_chosen = translate((com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponentv4_singlechoice_form, 'options'))[number], 'name')));
          // Block#: ES/3qD5cnIf;ZuYHC$$0
          com.fc.JavaScriptDistLib.ListView.saveTemplateCell('RadioButtonsInput_RadioButtons');
          com.fc.JavaScriptDistLib.ListView.removeAllCells('RadioButtonsInput_RadioButtons');
          on_listview_length_configured_RadioButtonsInput_RadioButtons();
          // Block#: AT*/2w#7yVc)iS,}pJO@
          hideError().then(response => {;
          });
        }
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    }
    com.fc.JavaScriptDistLib.ListView.setClickCallback('RadioButtonsInput_RadioBtnElement', on_listview_cell_clicked_RadioButtonsInput_RadioBtnElement);
    // Block#: o34rL]Kq2N9/xW1L@Nm2
    function on_listview_length_configured_RadioButtonsInput_RadioButtons() {
      try {
        com.fc.JavaScriptDistLib.ListView.configureCells('RadioButtonsInput_RadioButtons', getChoiceNum());
        $('[obj-name="' + instance + '_RadioButtons"]').children().each(function(i) {
          if(i >= 0) {
            com.fc.JavaScriptDistLib.ListView.setContext($(this));
            com.fc.JavaScriptDistLib.ListView.executeConfigCallback('RadioButtonsInput_RadioButtons', $(this), i);
            com.fc.JavaScriptDistLib.ListView.executeConfigHeightCallback('RadioButtonsInput_RadioButtons', $(this), i);
            com.fc.JavaScriptDistLib.ListView.resetContext($(this));
          }
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
  };
  var radiobuttonsuicomponentv4 = new RadioButtonsUIComponentV4();
  var radiobuttonsuicomponentv4_RadioButtonsInput = new RadioButtonsUIComponentV4Template("RadioButtonsInput");
  // PROJECT CODE
  var _that = this;
  // Block#: Mo!^K)FXJZvOd3Z8O7+O
  function on_start() {
    try {
      // Generates the choice list for radio buttons using field from api response.
      // Block#: [*_yFNgC^Mieth15`(C{
      radiobuttonsuicomponentv4_RadioButtonsInput.setRadioButtons(com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'options'], ['Color', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'id'], ['red', 'red']), com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'id'], ['yellow', 'yellow']), com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'id'], ['blue', 'blue'])]]), null).then(response => {;
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Application.registerEvent('start', on_start);
  $('[obj-name="MainScreen"]').show();
});
// Generated by snapp
// 384689-540968-757510-303564
