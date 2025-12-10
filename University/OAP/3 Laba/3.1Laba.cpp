#include "iostream"
#include "math.h"
#include "cmath"
using std::cout;
using std::cin;
using std::endl;

void main()
{
    setlocale(0,"Russian_Russia.1251");
    double x,s,eps,a,F;
    double n = 1;
    cout << "Введите значение аргумента и точность\n";
    cin >> x >> eps;
    F = x;
    a = x;
    do
    {
        if (x <= 0 || fabs(x) >= 1)
        {
            cout << "\nВведите значение x удовлетворяющее ОДЗ\n";
            cin >> x;
        }
        else
        {
            if (eps >= 1 || eps <= 0)
            {
                cout << "Введите значение eps удовлетворяющий ОДЗ\n";
                cin >> eps;
            }
        }
    } while (fabs(x) >= 1 || eps > 1 || eps < 0 || x <=0);
    {
        do
        {
            a *= -((2 * n - 1) * (2 * n - 1) * x * x) / (2 * n * (2 * n + 1));
            F += a;
            n++;
        } while (fabs(a) >= eps);
    }
    s = log((x + sqrt(x * x + 1)));
    cout << "\nПриблизительное значение arsh(x) = " << F;
    cout << "\nЗначение arsh(x) = " << s;
}