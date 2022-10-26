#include<bits/stdc++.h>
using namespace std;
#define watch(x) cout << (#x) << " = " << (x) << endl
#define PI double(2 * acos(0.0))
#define int long long int
#define MOD 1000000007
#define all(x) (x).begin(), (x).end()
#define INF 1e15
#define akipiD ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)
class node {
public:
node* prev;
int data;
node* next;
node(int value){
prev = NULL;
data = value;
next = NULL;
}
};
void insert_at_head(node*& head, int value)
{
node* n = new node(value);
n->next = head;
if (head != NULL) {
head->prev = n;
}
head = n;
}
void insert_at_tail(node*& head, int value)
{
if (head == NULL) {
insert_at_head(head, value);
return;
}
node* n = new node(value);
node* temp = head;
while (temp->next != NULL) {
temp = temp->next;
}
temp->next = n;
n->prev = temp;
}
void display(node* head)
{
node* temp = head;
while (temp != NULL) {
cout << temp->data << " -> ";
temp = temp->next;
}
cout << "NULL" << endl;
}
int32_t main() {
akipiD;
int t; cin>>t;
while(t--){
node* head = NULL;
insert_at_tail(head, 1);
insert_at_tail(head, 2);
insert_at_tail(head, 3);
insert_at_tail(head, 4);
insert_at_tail(head, 5);
display(head);
}
return 0;
}