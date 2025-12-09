#include "iostream"
using std::cin;
using std::cout;
using std::endl;

int main()
{
    setlocale(0,"Russian_Russia.1251");
    int arr[6][5],min,sum,i,j;
    cout << "Введите 6 строк по 5 элементов\n";
    for (i=0;i<6;i++)
    {
        for (j = 0; j < 5; j++)
        {
            cin >> arr[i][j];
        }
    }
    cout << "Массив arr = \n"; 
    for (i=0; i<6;i++)
    {
        for (j=0;j<5;j++)
        {
            cout << arr[i][j] << " ";
        }
        cout << "\n";
    }
    min = INT_MAX;
    for (j=0; j<5; j++)
    {
        sum = 0;
        for (i = 0; i<6; i++)
        {
            sum += arr[i][j];
        }
        
        if (sum < min)
        {
            min = sum;
        }
    }
    cout << min << endl;
}