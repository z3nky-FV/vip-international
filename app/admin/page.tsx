'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/lib/types';

export default function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);

  const fetchProducts = async () => {
    const res = await fetch('/api/products', { cache: 'no-store' });
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const resetForm = () => {
    setEditingSlug(null);
    setFormData({ name: '', category: 'Биопластыри', description: '' });
    setBenefits(['']);
    setQa([]);
    setFile(null);
  };

  const handleEdit = (product: Product) => {
    setEditingSlug(product.slug);
    setFormData({ name: product.name, category: product.category, description: product.description });
    setBenefits(product.benefits && product.benefits.length ? product.benefits : ['']);
    setQa(product.qa && product.qa.length ? product.qa : []);
    setFile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (slug: string) => {
    if (!confirm('Точно удалить этот продукт?')) return;
    try {
      await fetch(`/api/products?slug=${slug}`, { method: 'DELETE' });
      fetchProducts();
    } catch (e) {
      alert('Ошибка при удалении');
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    category: 'Биопластыри',
    description: '',
  });

  const [benefits, setBenefits] = useState<string[]>(['']);
  const [qa, setQa] = useState<{question: string, answer: string}[]>([]);

  const handleBenefitChange = (index: number, value: string) => {
    const newBenefits = [...benefits];
    newBenefits[index] = value;
    setBenefits(newBenefits);
  };

  const handleQaChange = (index: number, field: 'question' | 'answer', value: string) => {
    const newQa = [...qa];
    newQa[index][field] = value;
    setQa(newQa);
  };

  const slugify = (str: string) => {
    return str.toLowerCase().replace(/[^a-zа-яё0-9]+/gi, '-').replace(/(^-|-$)/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = '';
      if (file) {
        const uploadData = new FormData();
        uploadData.append('file', file);
        const uploadRes = await fetch('/api/upload', {
          method: 'POST',
          body: uploadData,
        });
        const uploadJson = await uploadRes.json();
        if (uploadJson.url) {
          imageUrl = uploadJson.url;
        }
      }

      const productData = {
        name: formData.name,
        slug: editingSlug || slugify(formData.name),
        category: formData.category,
        description: formData.description,
        benefits: benefits.filter(b => b.trim() !== ''),
        qa: qa.filter(q => q.question.trim() !== '' && q.answer.trim() !== ''),
        ...(imageUrl && { image: imageUrl }), // If no new image, backend should probably keep old one, but for simplicity here we just merge it.
      };

      if (editingSlug) {
        // If editing and no new image is provided, we need to preserve the old image.
        // We'll let the API handle it or just pass the old image if imageUrl is empty.
        const oldProduct = products.find(p => p.slug === editingSlug);
        if (!imageUrl && oldProduct?.image) {
          productData.image = oldProduct.image;
        }

        const res = await fetch(`/api/products?slug=${editingSlug}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData),
        });
        if (res.ok) {
          alert('Продукт успешно обновлен!');
          resetForm();
          fetchProducts();
        }
      } else {
        const res = await fetch('/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData),
        });
        if (res.ok) {
          alert('Продукт успешно добавлен!');
          resetForm();
          fetchProducts();
        } else {
          alert('Ошибка при добавлении');
        }
      }
    } catch (error) {
      console.error(error);
      alert('Ошибка!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ padding: '4rem 1.5rem', background: '#fff' }}>
      <div className="section-container" style={{ maxWidth: 700 }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 24, textAlign: 'center' }}>
          Админ панель
        </h1>
        <p style={{ textAlign: 'center', marginBottom: 40, color: 'var(--text-muted)' }}>
          Добавить новый продукт в каталог
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 20 }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Название продукта</label>
            <input 
              required 
              type="text" 
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})}
              style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #ddd' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Категория</label>
            <select 
              value={formData.category} 
              onChange={e => setFormData({...formData, category: e.target.value})}
              style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #ddd' }}
            >
              <option value="Биопластыри">Биопластыри</option>
              <option value="Коллоидные воды">Коллоидные воды</option>
              <option value="Кофе и Чай">Кофе и Чай</option>
              <option value="Витамины">Витамины</option>
              <option value="Капсулы">Капсулы</option>
              <option value="Энергетики">Энергетики</option>
              <option value="Косметика">Косметика</option>
              <option value="Разное">Разное</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Описание</label>
            <textarea 
              required 
              rows={4}
              value={formData.description} 
              onChange={e => setFormData({...formData, description: e.target.value})}
              style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #ddd', resize: 'vertical' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Фото продукта</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={e => setFile(e.target.files?.[0] || null)}
              style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #ddd', background: '#fafafa' }}
            />
          </div>

          <div style={{ background: '#f9f9f9', padding: 20, borderRadius: 12 }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 12 }}>Отличительные черты / Преимущества</label>
            {benefits.map((benefit, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                <input 
                  type="text" 
                  value={benefit} 
                  onChange={e => handleBenefitChange(i, e.target.value)}
                  placeholder={`Преимущество ${i + 1}`}
                  style={{ flex: 1, padding: 10, borderRadius: 6, border: '1px solid #ddd' }}
                />
                {benefits.length > 1 && (
                  <button type="button" onClick={() => setBenefits(benefits.filter((_, idx) => idx !== i))} style={{ padding: '0 12px', background: '#ffebee', color: '#d32f2f', border: 'none', borderRadius: 6, cursor: 'pointer' }}>✕</button>
                )}
              </div>
            ))}
            <button type="button" onClick={() => setBenefits([...benefits, ''])} style={{ padding: '8px 16px', background: '#e0e0e0', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 13, marginTop: 8 }}>
              + Добавить преимущество
            </button>
          </div>

          <div style={{ background: '#f9f9f9', padding: 20, borderRadius: 12 }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 12 }}>Вопросы и ответы (FAQ)</label>
            {qa.map((item, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid #eee' }}>
                <input 
                  type="text" 
                  value={item.question} 
                  onChange={e => handleQaChange(i, 'question', e.target.value)}
                  placeholder={`Вопрос ${i + 1}`}
                  style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #ddd' }}
                />
                <textarea 
                  rows={2}
                  value={item.answer} 
                  onChange={e => handleQaChange(i, 'answer', e.target.value)}
                  placeholder={`Ответ ${i + 1}`}
                  style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #ddd', resize: 'vertical' }}
                />
                <button type="button" onClick={() => setQa(qa.filter((_, idx) => idx !== i))} style={{ alignSelf: 'flex-start', padding: '6px 12px', background: '#ffebee', color: '#d32f2f', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 12 }}>
                  Удалить вопрос
                </button>
              </div>
            ))}
            <button type="button" onClick={() => setQa([...qa, { question: '', answer: '' }])} style={{ padding: '8px 16px', background: '#e0e0e0', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 13 }}>
              + Добавить Вопрос-Ответ
            </button>
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
            <button disabled={loading} type="submit" className="btn-primary" style={{ flex: 1 }}>
              {loading ? 'Сохранение...' : (editingSlug ? 'ОБНОВИТЬ ПРОДУКТ' : 'ДОБАВИТЬ ПРОДУКТ')}
            </button>
            {editingSlug && (
              <button type="button" onClick={resetForm} style={{ padding: '0 20px', background: '#e0e0e0', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>
                Отмена
              </button>
            )}
          </div>
        </form>

        <div style={{ marginTop: 60 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20 }}>Существующие продукты</h2>
          {products.length === 0 ? (
            <p style={{ color: 'var(--text-muted)' }}>Нет добавленных продуктов.</p>
          ) : (
            <div style={{ display: 'grid', gap: 16 }}>
              {products.map(p => (
                <div key={p.slug} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 16, background: '#f9f9f9', borderRadius: 12, border: '1px solid #eee' }}>
                  <div>
                    <h3 style={{ fontWeight: 700 }}>{p.name}</h3>
                    <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>{p.category}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <button onClick={() => handleEdit(p)} style={{ padding: '6px 12px', background: 'var(--purple-bg)', color: 'var(--purple)', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 600, fontSize: 13 }}>
                      Редактировать
                    </button>
                    <button onClick={() => handleDelete(p.slug)} style={{ padding: '6px 12px', background: '#ffebee', color: '#d32f2f', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 600, fontSize: 13 }}>
                      Удалить
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
