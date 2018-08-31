# bom-radar-loop

A simple angular element component to display a radar image loop based off the weather radar images in Australia from BOM.

## Usage

* Include `dist/bom-radar-loop.js` as a script inside your HTML or use a CDN such as [unpkg](https://unpkg.com/#/).
* Use the `<bom-radar-loop>` element in your HTML and specify the radar station via an attribute.
  > **NOTE: Must be a radar station ID. Rainfall station IDs are currently not supported**
* For example:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>BOM Radar Loop</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <div>
      <bom-radar-loop station="IDR713"></bom-radar-loop>
    </div>
    <script type="text/javascript" src="bom-radar-loop.js"></script>
  </body>
</html>
```

## Warning

Use at your own risk. This angular element is dependent upon the structure of the BOM site remaining consistent. I can not guarantee that changes to the BOM site won't break this code. I will endeavor to keep this up to date but no guarantee can be provided. Feel free to submit an issue / PR on GitHub to help out.

## Release History

* 0.0.1 Initial Alpha Release

## References

* https://www.telerik.com/blogs/getting-started-with-angular-elements
* https://angularfirebase.com/lessons/angular-elements-quick-start-guide/