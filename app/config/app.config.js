	(
		function () {

			// nao deixa criar variavel sem var
			'use strict';

            // criando o config
			angular.module('app').config(config);

            // injetando as dependencias
			config.$inject = ['$stateProvider', '$urlRouterProvider'];

			function config($stateProvider, $urlRouterProvider) {

				// Setando a rota padrao
				$urlRouterProvider.otherwise('/escrever');

                // criando o layout master (menu em todas as telas)
				$stateProvider
					.state('layout', 
					{
						templateUrl : 'app/views/layout.html',
						abstract : true
					})					
					.state('layout.escrever', 
					{
						templateUrl : 'app/views/escrever.html',
						url : '/escrever',
						cache : false
					});

			} // end function config

		} // end function

	)();

	