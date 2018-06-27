(function () {
'use strict';

angular.module('WebOCRApp',['hxPhotos','angular-screenshot'])
       .controller('AdminController', AdminController);


  AdminController.$inject = ['WebcamService','$scope'];
  function AdminController(WebcamService,$scope){
    var $ctrl=this;

    // $ctrl.imgData=new Image();
    // $ctrl.imgData.src='/upload/test.PNG'

    // $ctrl.data=4;
    // $ctrl.webcam = WebcamService.webcam;

    // $ctrl.capture=function(){
    //   console.log('Image captured');
    //   $ctrl.webcam.makeSnapshot();
    // };

    $ctrl.convert=function(){
      var img = document.getElementById("capturedImage");
      Tesseract.recognize($ctrl.imgData,{
              lang: 'jpn'
              // lang:'eng'
          })
         .progress(function (p) { console.log('progress', p);})
         .then(function (result) {
           console.log('result', result);
           var div = document.getElementById('display');
           div.innerHTML += result.html;
         });
    };
  
    
    $ctrl.advanceApi;
    $ctrl.cancel = cancel;
    $ctrl.download = download;
    $ctrl.downloadFull = downloadFull;
    $ctrl.imageApi;
    $ctrl.isOpenScreenshot = false;
    $ctrl.openScreenshot = openScreenshot;
    $ctrl.sendImage = sendImage;
    $ctrl.target1Options = {
       filename: 'target1.png',
       downloadText: 'Download me',
       cancelText: 'Close it!'
    };

    function cancel() {
       if ($ctrl.advanceApi) $ctrl.advanceApi.cancel();
    }


    function download() {
       if ($ctrl.advanceApi) $ctrl.advanceApi.download();
    }

    function downloadFull() {
       if ($ctrl.fullScreenApi) $ctrl.fullScreenApi.downloadFull();
    }

    function openScreenshot() {
       $ctrl.isOpenScreenshot = !$ctrl.isOpenScreenshot;
    }

    function sendImage() {

      console.log('sasas');
       if ($ctrl.imageApi) {
          $ctrl.imageApi.toPng(function (dataUrl) {
           
            $ctrl.imgData=dataUrl
          });
       }
    }
 

    

  
  
  
  
  
  }
})();
