// @ts-nocheck
sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("de.oge.fioristarterpack.zjte_training.controller.View1", {
			onInit: function () {                
                this.getView().setModel(new sap.ui.model.json.JSONModel({operator: "+"}));
            },
            
            onCalculate: function(oEvent) {
                var oModel = this.getView().getModel();
                var nWert1 = parseFloat(oModel.getProperty("/wert1"), 10);
                var nWert2 = parseFloat(oModel.getProperty("/wert2"), 10);
                var sOperator = oModel.getProperty("/operator");
                
                var nErgebnis = sOperator === "+" ? (nWert1 + nWert2) : (nWert1 * nWert2);

                oModel.setProperty("/ergebnis", nErgebnis);

            },

            onGoToView2: function() {
                var oRouter = this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteView2", {});
            }
		});
	});
