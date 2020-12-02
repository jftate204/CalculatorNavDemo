// @ts-nocheck
sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("de.oge.fioristarterpack.zjte_training.controller.View2", {
			onInit: function () {                
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("RouteView2").attachPatternMatched(this.onMatched, this);
            },
            
            onMatched: function(oEvent) {
                console.log("Route View2");

            },

            onGoBack: function() {
                var oRouter = this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteView1", {});
            }
		});
	});