//Лабораторная работа №3
//Программирование циклов с неизвестным числом повторений

#include "iostream"
#include "math.h"
#include "cmath"
using std::cin;
using std::cout;
using std::endl;

void main()
{
    setlocale(0,"Russian_Russia.1251");
    double x,eps,F,a,s;
    cout << "Введите значение аргумента и точности\n ";
    double n =1;
    cin >> x >> eps;
    F = x;
    a = x;
   while (fabs(x) >= 1 || eps > 1 || eps < 0 || fabs(x)<=0)
    {
        if (fabs(x)>=1 || fabs(x)<=0)
        {
            cout << "\nВведите значение x удовлетворяющее ОДЗ\n";
            cin >> x;
        } else 
        {
        if (eps>1 || eps<0)
        {
            cout << "Введите значение eps удовлетворяющий ОДЗ\n";
            cin >> eps;
        }
        }
    }
    while (fabs(a)>=eps)
    {
        a *= -((2 * n - 1) * (2 * n - 1) * x * x) / (2 * n * (2 * n + 1));
        F +=a;
        n++;
    }
    s =  log((x+sqrt(x*x+1)));
    cout << "\nПриблизительное значение arsh(x) = " << F;
    cout << "\nЗначение arsh(x) = " << s;
}