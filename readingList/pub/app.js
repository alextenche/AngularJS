(function(){
	'use strict';

	angular.module('readingList', [])
		.controller('ReadingListController', function(){
			this.books = books;

			this.genres = genres;
		})
		.directive('bookCover', function(){
			return {
				restrict: 'E',
				templateUrl: 'book-cover.html'
			};
		})
		.directive('bookGenres', function(){
			return {
				restrict: 'E',
				templateUrl: 'book-genres.html'
			};
		});

	var genres = ['non-fiction', 'fiction', 'war', 'weather']

	var books = [
		{
			title: 'The Martian',
			authors: ['Andy Weir'],
			isbn: '0553418025',
			review: 'the movie is coming and it looks great !',
			rating: 5,
			genres: ['non-fiction']
		},
		{
			title: 'The Long Utopia: A Novel (Long Earth)',
			authors: ['Terry Pratchett', 'Stephen Baxter'],
			isbn: '0062297333',
			review: 'hmm, intrestingh this one',
			rating: 4,
			genres: ['fiction']
		},
		{
			title: 'Slow Bullets',
			authors: ['Alastair Reynolds'],
			isbn: '1616961937',
			review: 'really love to see some slow bullets, had enough of the fast ones',
			rating: 2,
			genres: ['fiction', 'war']
		},
		{
			title: 'The Winds of Dune',
			authors: ['Brian Herbert', 'Kevin J. Anderson'],
			isbn: '0765362627',
			review: 'must be dry, the winds I mean',
			rating: 3,
			genres: ['fiction', 'weather']
		}
	];
})();