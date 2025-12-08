#include "iostream"
using std::cout;
using std::cin;
using std::endl;

void main()
{
    setlocale(LC_ALL,"Russian_Russia.1251");
    int x, kol = 0,sum = 0;
    cout << "Введите числа\n";
    for (int i = 0; i<12; i++)
    {
        cin >> x;
        if (x<=5&&x>=(-5))
        {
            sum+=x;
        }
        if (x%5 == 0)
        {
            kol++;
        }
       
    }
    cout << "Количество чисел делящихся без остатка на 5 равно " << kol;
    cout << "\n Сумма чисел принадлежащих диапазону [-5;5] = " << sum << endl;

    system("pause");


}