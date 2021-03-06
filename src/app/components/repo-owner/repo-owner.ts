import {Component} from '@angular/core';
import {RouteParams, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Http} from '@angular/http';
import {Github} from '../../services/github';

@Component({
  selector: 'repo-owner',
  template: `<pre>this.owner = {{ owner | json }}</pre>`,
  styleUrls: [``],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})
export class RepoOwner {
  repoDetails = {};
  org: string = "";
  name: string = "";
  owner = {};
  constructor(public routeParams:RouteParams, public github: Github) {}

  ngOnInit() {
    this.org = this.routeParams.get('org');
    this.name = this.routeParams.get('name');
    this.github.getRepoForOrg(this.org, this.name)
      .subscribe(repoDetails => {
        this.repoDetails = repoDetails;
        this.owner = repoDetails.owner;
      });
  }
 }