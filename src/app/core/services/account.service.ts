import { Account } from './../../data/account';
import { Injectable } from '@angular/core';
import { AccountApiService } from './account-api.service';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  accountList: Account[] = [];

  constructor(private accountApi: AccountApiService) {
    this.getAccountList();
  }

  getAccountList() {
    this.accountApi.getAllAccounts().subscribe((res) => {
      this.accountList = Object.assign([], res);
    });
  }

  addAccount(account: Account) {
    this.accountApi.addAccount(account).subscribe((res) => {
      this.accountList.push(Object.assign(res));
    });
  }

  showAccount(): Account[] {
    return this.accountList;
  }
}
