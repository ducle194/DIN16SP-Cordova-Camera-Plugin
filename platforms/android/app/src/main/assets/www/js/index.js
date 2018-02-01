document.addEventListener("deviceready", onDevice, false);

function onDevice() {
  document.getElementById('btn1').addEventListener('click', openCamera);
  document.getElementById('btn2').addEventListener('click', openFilePicker);

  function setOptions(srcType) {
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    return options;
  }

  function openCamera(selection) {
    var srcType = Camera.PictureSourceType.CAMERA;
    var options = setOptions(srcType);

    navigator.camera.getPicture(cameraSuccess, cameraError, options);
  }

  function openFilePicker(selection) {
    var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
    var options = setOptions(srcType);

    navigator.camera.getPicture(cameraSuccess, cameraError, options);
  }

  function cameraSuccess(imageURI) {
      var image = document.getElementById('myImg');

      image.src = imageURI;

      image.classList.add('display');
      createNewFileEntry(imageURI);
  }

  function cameraError(message) {
      console.debug("Unable to obtain picture: " + error, "app");
  }
}