app.service('angularService', function ($http) {

    this.saveAssets = function (model) {
        var response = $http({
            method: "Post",
            url: "/Admin/SaveAssets",
            data: JSON.stringify(model),
            datatype: "Json"
        });
        return response;
    }
    this.getasset = function () {
        return $http.get("/Admin/GetAssetsList")
    }
    this.deleteasset = function (id) {
        return $http.get("/Admin/DeleteAssets", { params: { id: id } });
    }

});