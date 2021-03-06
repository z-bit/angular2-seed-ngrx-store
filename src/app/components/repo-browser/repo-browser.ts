import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {RepoList} from '../repo-list/repo-list';
import {RepoDetail} from '../repo-detail/repo-detail';
import {RepoOwner} from '../repo-owner/repo-owner';

import {Github} from '../../services/github';

@Component({
  selector: 'repo-browser',
  template: require('./repo-browser.html'),
  styles: [require('./repo-browser.css')],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})
@RouteConfig([
	{path: '/:org',       component: RepoList,   name: 'RepoList'},
	{path: '/:org/:name', component: RepoDetail, name: 'RepoDetail' },
  {path: '/:org/:name/owner', component: RepoOwner, name: 'RepoOwner' },
])
export class RepoBrowser {

  constructor(private router:Router, private github: Github) {}

  searchForOrg(orgName: string){
    this.github.getOrg(orgName)
      .subscribe(({name}) => {
        console.log(name);
        this.router.navigate(['RepoList', {org: orgName}])
      })
  }

}
