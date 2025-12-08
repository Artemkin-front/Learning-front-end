#include "iostream"
#include "clocale"
using std::cout;
using std::cin;
using std::endl;

void main()
{
    setlocale(LC_ALL, "Russian_Russia.1251");
    int array[12],sum = 0, kol = 0, i=0;
    int x;
    cout << "Введите числа" << endl;
    for(i=0;i<12; i++ )
    {
        cin >> array[i];
        if (array[i]<=5&&array[i]>=(-5))
        {
            sum+=array[i];
        }
        if(array[i]%5==0)
        {
            kol++;
        }
    }
    cout <<  "Сумма чисел равна " << sum << endl;
    cout << "Количество чисел делящихся на 5 без остатка равно " << kol<<  endl;
    system("pause");

}