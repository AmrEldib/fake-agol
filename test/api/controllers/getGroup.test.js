var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('getGroup', function() {

    describe('GET /sharing/rest/community/groups/{groupId}', function () {

      it('should return JSON with non-empty ID', function(done) {

        request(server)
          .get('/sharing/rest/community/groups/{groupId}')
          .query({ groupId: 'random', token: '1234' })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.id.should.not.eql('');
            done();
          });
      });

      //it('should accept a name parameter', function(done) {

      //  request(server)
      //    .get('/hello')
      //    .query({ name: 'Scott'})
      //    .set('Accept', 'application/json')
      //    .expect('Content-Type', /json/)
      //    .expect(200)
      //    .end(function(err, res) {
      //      should.not.exist(err);

      //      res.body.should.eql('Hello, Scott!');

      //      done();
      //    });
      //});

    });

  });

});
