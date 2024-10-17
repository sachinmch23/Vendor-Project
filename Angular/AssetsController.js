app.controller('asset', function ($scope, angularService) {

  
    $scope.mybtn = "Submit";

    $scope.saveAssets = function () {
        var obj = {
            AssetsId: $scope.AssetsId,
            Name: $scope.name,
            ChangePerDay: $scope.changeperday,
            Description: $scope.description,
            Date: $scope.date,
        }
        console.log(obj);
        angularService.saveAssets(obj).then(function (res) {
            if (res.data.Message == "Success") {
                alert(" Successfull");
                $scope.clearForm();
            }
            else {
                alert("Not Submitted")
            }
        });
    }
    $scope.clearForm = function () {
        $scope.GetassetList();
        $scope.AssetsId = 0;
        $scope.name = "";
        $scope.changeperday = "";
        $scope.description = "";
        $scope.date = "";
        $scope.mybtn = "Submit";

    }
    $scope.GetassetList = function () {
        angularService.getasset().then(function (res) {
            if (res.data.Message == "Success") {
                console.log(res.data.AssetsList);
                $scope.asetList = res.data.AssetsList;
            }
            else {
                alert("Error while getting data");
            }
        })
    }
    $scope.GetassetList();
    
   $scope.deleteData = function (id) {
            angularService.deleteasset(id).then(function (res) {
                if (res.data.Message == "Success") {
                    alert("Delete SuccessFull");
                    $scope.GetassetList();
                }
                else {
                    alert("Not Deleted");
                }

            });
        }

        $scope.EditData = function (m) {

            $scope.AssetsId = m.AssetsId;
            $scope.name = m.Name;
            $scope.changeperday = m.ChangePerDay;
            $scope.description = m.Description;
            $scope.date = m.Date;


            $scope.mybtn = "Update";
        }
    
});