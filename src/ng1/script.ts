declare var angular:any;

export default angular.module("myJsApp", []);

angular.module("myJsApp").component("jsApp", {
    template: `
<div id="outer">
<div id="middle">
<div id="sect1">
<div class="regBox">
       <div class="regHeader">
       Registration Form
</div>
<div class="regContent">
<form  ng-submit="formSubmit()">
<table>
<tbody>
<tr>
<td>Name</td>
<td><input type="text" required="required"></td>
</tr>
<tr>
<td>Mobile No.</td>
<td><input type="number" required="required" max="9999999999" min="111111111"></td>
</tr>
<tr>
<td>Date Of Birth</td>
<td><input type="date" required="required"></td>
</tr>
<tr>
<td>Username</td>
<td><input type="text" required="required"></td>
</tr>
<tr>
<td>Password</td>
<td>
<input type="password" required="required"></td>
</tr>
<tr style="text-align: center">
<td>
<a href="/login"> Click Here</a>
</td>
<td>
    <button type="submit"> Submit</button>
</td>
</tr>
</tbody>
</table>
</form>
</div>

       </div>
</div>
</div>
</div>




    `,
    controller: function($scope) {
        $scope.message = "test message from ng1";
        $scope.formSubmit = function (){
          alert('susscess');
        }
      console.log("jsApp component started", $scope.message);
    }
});

